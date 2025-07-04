import OTP from "../Model/Otp.js";

const otpVerification = async (req, res)=>{
    try{
        
    }
    catch(){
        console.error(err);
        res.status(500).json({
            success : false ,
            message : "Internal server error "
        })
    }
}