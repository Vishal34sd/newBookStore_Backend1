import express from "express";
import dotenv from "dotenv";
import "./Database/db.js";
import bookRoutes from "./Routes/bookRoute.js";
import customerRoutes from "./Routes/customerRoutes.js";
import cartRoutes from "./Routes/cartRoute.js";
import connectToDB from "./Database/db.js";
dotenv.config();
const PORT = process.env.PORT ;


const app = express();
connectToDB();

app.use(express.json());
// Use this for parsing URL-encoded form data (key=value&key2=value2)
app.use(express.urlencoded({ extended: true }));

app.use("/api/book/",bookRoutes);
app.use("/api/customer/", customerRoutes);
app.use("/api/cart/",cartRoutes);


app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
})





