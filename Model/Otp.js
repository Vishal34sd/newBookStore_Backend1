import monggose from "mongoose";

const otpSchema = new mongoose.Schema({
    email : {
        type : String ,
        required : true ,
        unique : true
    },
    otp: {
        type : String, 
        required : true,
    },
    expiresAt :{
        type : Date ,
        default: () => new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
        }
})

const otpModel = mongoose.model("OTP", otpSchema);
export default otpModel;