import express from "express";
import { customerRegister } from "../Controller/authController.js";

const router = express.Router();

router.post("/register",customerRegister);


export default router ;