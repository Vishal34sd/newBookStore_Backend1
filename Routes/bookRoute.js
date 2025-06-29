import fetchAllBooks from "../Controller/bookController.js";
import express from "express" ;

const router = express.Router();

router.get("/showBook", fetchAllBooks);





export default router ;