import express from "express";
import { customerRegister , customerLogin} from "../Controller/authController.js";

const router = express.Router();

router.post("/register",customerRegister);
router.post("/login",customerLogin);


export default router ;