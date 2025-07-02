import { timeStamp } from "console";
import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    title :{
        type : String ,
        required : true ,
        trim : true , 
        unique : true
    },
    author : {
        type : String , 
        required : true

    },
    category : {
        type : String , 
        required : true
    }
}, { timestamps: true });

const  bookModel = mongoose.model("Book1",bookSchema );
export default bookModel ;