import express from "express";

const router = express.Router();

router.post("/otp-verify", otpVerification);


export {otpVerification};