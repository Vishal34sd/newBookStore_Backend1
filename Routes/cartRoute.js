import express from "express";
import { addToCart , showCart, deleteItem} from "../Controller/cartController.js";


const router = express.Router();

router.post("/add", addToCart);
router.get("/:userId", showCart);
router.patch("/update", deleteItem);

export default router;