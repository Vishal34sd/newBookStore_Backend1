import express from "express";
import { customerRegister , customerLogin} from "../Controller/authController.js";
import { otpVerification } from "../Controller/otpController.js";
import authMiddleware from "../Middleware/authMiddleware.js";
const router = express.Router();

router.post("/register",customerRegister);
router.post("/login",customerLogin);
router.post("/otp-verify", authMiddleware , otpVerification);


export default router ;