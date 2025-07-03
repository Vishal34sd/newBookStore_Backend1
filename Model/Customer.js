
import mongoose from "mongoose";

const customerSchema = new  mongoose.Schema({
    username :{
        type:String,
        required : true ,
        unique : true ,
        trim : true
    },
    email : {
        type : String ,
        required : true ,
        unique : true ,
        trim : true
    },
    password : {
        type : String , 
        required : true 
    },
    role : {
        type : String ,
        enum : ["user" , "admin"],
        default : "user",
        
    }
}, {timestamp:true});

const customerModel = mongoose.model("Customer", customerSchema);
export default customerModel ; 