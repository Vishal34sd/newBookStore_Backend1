import {fetchAllBooks , searchBook,getBook} from "../Controller/bookController.js";
import express from "express" ;
import authMiddleware from "../Middleware/authMiddleware.js"

const router = express.Router();

router.get("/showBook",authMiddleware , fetchAllBooks);
router.get("/searchBook" , authMiddleware , searchBook);
router.get("/getBook/:id" , authMiddleware , getBook);





export default router ;