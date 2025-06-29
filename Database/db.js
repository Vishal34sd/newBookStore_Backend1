import mongoose from "mongoose";

const connectToDB =  async()=>{
    try{
        const connection = await mongoose.connect("mongodb+srv://dubeyji8080:dubey123@cluster0.uai8kho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
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