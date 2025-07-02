import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    book : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : "Book1"
    }, 
    quantity : {
        type : Number , 
        default : 1
    }
});

const cartSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Customer",
        unique : true 
    },
    items : [cartItemSchema]
});

const cartItemModel = mongoose.model("CartItem", cartItemSchema);
const cartModel = mongoose.model("Cart", cartSchema);


export  default cartModel;