import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDB =  async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        if(connection){
            console.log("Database connected successfully");
        }
        else{
            console.log("Cannot connect to db")
        }
    }
    catch(err){
        console.log("Some internal error occured ", err);
    }
}

export default connectToDB ;