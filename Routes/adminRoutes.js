import express from "express";
import { addBookData, updateBook , deleteBookData} from "../Controller/adminController.js";
import authMiddleware from "../Middleware/authMiddleware.js";
import isAdminMiddleware from "../Middleware/adminMiddleware.js";
const router = express.Router();

router.post("/addBook",authMiddleware , isAdminMiddleware,  addBookData);
router.put("/update/:bookId", authMiddleware , isAdminMiddleware,updateBook);
router.delete("/delete/:bookId", authMiddleware, isAdminMiddleware, deleteBookData);




export default router ;