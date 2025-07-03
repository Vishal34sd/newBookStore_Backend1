import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "Customer"
    },
    bookId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Book1"
    },
    totalPrice : {
        type : Number ,
        required : true
    }
})
const orderModel = mongoose.model("Order", orderSchema);
export default orderModel ;