import {fetchAllBooks , searchBook} from "../Controller/bookController.js";
import express from "express" ;

const router = express.Router();

router.get("/showBook", fetchAllBooks);
router.get("/searchBook" , searchBook);





export default router ;