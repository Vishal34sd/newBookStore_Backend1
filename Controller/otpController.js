import OTP from "../Model/Otp.js";
import {sendEmail} from "../Nodemailer Config/nodeMailerConfig.js";
import { otpGenerator } from "../Nodemailer Config/nodeMailerConfig.js";

// Send OTP and save to DB
const sendOtp = async (email) => {
    try {
        const otp = otpGenerator();
        await sendEmail(email, otp);

        // Remove any existing OTP for this email
        await OTP.deleteMany({ email: email });

        // Save new OTP to DB
        const otpDoc = new OTP({
            email: email,
            otp: otp,
            expiresIn: Date.now() + 5 * 60 * 1000 // 5 minutes from now
        });
        await otpDoc.save();

        return console.log("OTP sent");
    } catch (err) {
        console.error(err);
    }
};

const otpVerification = async (req, res) => {
    const email = req.userInfo.email;
    if (!email) {
        return res.status(400).json({ message: "email not provided" });
    }
    try {
        const { otp } = req.body;
        // Find OTP document for this email
        const otpDoc = await OTP.findOne({ email: email });
        if (!otpDoc) {
            return res.status(400).json({
                success: false,
                message: "OTP not found or expired"
            });
        }

        // Compare OTPs
        if (otp !== otpDoc.otp) {
            return res.status(401).json({
                success: false,
                message: "Invalid OTP"
            });
        }

        // OTP is valid, delete it
        await OTP.deleteOne({ _id: otpDoc._id });

        return res.status(200).json({
            success: true,
            message: "Email account verified successfully"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export { sendOtp, otpVerification };