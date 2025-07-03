import express from "express";
import { addToCart , showCart, deleteItem} from "../Controller/cartController.js";
import authMiddleware from "../Middleware/authMiddleware.js";


const router = express.Router();

router.post("/add",authMiddleware, addToCart);
router.get("/:userId", authMiddleware,showCart);
router.patch("/update",authMiddleware, deleteItem);

export default router;