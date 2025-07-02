import express from "express";
import { addToCart } from "../Controller/cartController.js";


const router = express.Router();

router.post("/add", addToCart);

export default router