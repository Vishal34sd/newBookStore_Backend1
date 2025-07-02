import Cart from "../Model/Cart.js";

const addToCart = async (req, res) => {
    try {
        const { userId, bookId, quantity } = req.body;
        const qty = parseInt(quantity) || 1;

        let cart = await Cart.findOne({ user : userId }); // Use 'user' field as per schema

        if (!cart) {
            cart = new Cart({
                user: userId,
                items: []
            });
        }

        // Find index of the item in the cart
        const itemIndex = cart.items.findIndex(
            (item) => item.book.toString() === bookId
        );

        if (itemIndex > -1) {
            // If item exists, increment quantity by requested amount
            cart.items[itemIndex].quantity += qty;
        } else {
            // Add new item to cart
            cart.items.push({
                book: bookId,
                quantity: qty
            });
        }

        await cart.save();
        

        res.status(200).json({
            success: true,
            message: "Books added to cart successfully",
            data: cart
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const showCart = async(req, res)=>{
    try{
        const userId = req.params.userId; 
        
        const allCartItem = await Cart.findOne({user:userId}).populate("items.book");

        
        if(!allCartItem){
            return res.status(400).json({ 
                success : false , 
                message : "Cannot show the cart "
            });
        }

        return res.status(200).json({
            success : true ,
            message : "All cart data fetched successfully ",
            data : allCartItem
        })

    }
    catch(err){
        res.status(500).json({
            success : false ,
            message : "Internal server error " // Fix typo
        })
    }
}

const deleteItem = async (req, res) => {
    try {
        const { userId, bookId } = req.body;
        const newBookId = bookId.trim();

        const userCart = await Cart.findOne({ user: userId });

        if (!userCart) {
            return res.status(404).json({
                success: false,
                message: "Cart not found"
            });
        }

        // Filter out the item with matching bookId
        const newItems = userCart.items.filter(item => item.book.toString() !== newBookId);
        userCart.items = newItems;

        await userCart.save();

        return res.status(200).json({
            success: true,
            message: "Item deleted from cart successfully",
            data: userCart
        });

    } catch (err) {
        console.error("Error deleting cart item:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


export { addToCart , showCart, deleteItem};