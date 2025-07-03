import express from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import { placedOrder } from "../Controller/orderController.js";

const router = express.Router();

router.post("/placed", authMiddleware, placedOrder);

export default router ;