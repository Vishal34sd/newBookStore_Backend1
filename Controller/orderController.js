import Order from "../Model/Order.js";
import Cart from "../Model/Cart.js";

const placedOrder = async(req, res)=>{
    try{
        const userId = req.userInfo.userId;
        const cart = await Cart.findOne({user:userId}).populate("items.bookId");
        if(!cart || cart.items.length===0 ){
            return res.status(404).json({
                success : false ,
                message : "Cart is empty "
            });
        }
        let totalPrice = 0;
        for(const item of cart.items){
            if(!item.bookId || !item.bookId.price) continue ;
            totalPrice+= item.bookId.price * item.quantity;
        }

        const newOrder = await new Order({
            userId: userId, 
            items : cart.items.map((item)=>({
                bookId : item.bookId,
                quantity : item.quantity
            })),
            totalPrice
        });
        await newOrder.save();

        cart.items=[];
        await cart.save();

        res.status(201).json({
            success : true ,
            message : "Order placed successfully"
        });
        
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success : false ,
            message : "Something went wrong "
        });
    }
}

export {placedOrder};