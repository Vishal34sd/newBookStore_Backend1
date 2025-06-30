import {fetchAllBooks , searchBook,getBook} from "../Controller/bookController.js";
import express from "express" ;

const router = express.Router();

router.get("/showBook", fetchAllBooks);
router.get("/searchBook" , searchBook);
router.get("/getBook/:id" , getBook);





export default router ;