import express from "express";
import { addToCart , showCart} from "../Controller/cartController.js";


const router = express.Router();

router.post("/add", addToCart);
router.get("/:userId", showCart);

export default router