import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const otpGenerator = ()=>{
    return Math.floor(100000 + Math.random()*900000).toString();
}


const transporter = nodemailer.createTransport({
    service : "gmail",
    secure : true,
    port : 465 ,
    auth : {
        user : process.env.USER ,
        pass : process.env.PASS
    }
});

const sendEmail = async(email,otp)=>{
    const optionMail = {
        from : process.env.USER,
        to : email,
        subject : "Login OTP ",
        text : `Welcome for login on our website. Your OTP for login is ${otp}`
    }

    try{
        const sentMail = await transporter.sendMail(optionMail);
        if(!sentMail){
           console.log("Email not sent")
        }
        console.log("Email sent successfully")
    }
    catch(err){
        console.error(err);
    }
}

export {sendEmail, otpGenerator};