import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "Customer"
    },
    items : [{
        bookId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Book1"
        },
        quantity : {
            type : Number ,
            required : true
        }
    }],
    totalPrice : {
        type : Number ,
        required : true
    }
})
const orderModel = mongoose.model("Order", orderSchema);
export default orderModel ;