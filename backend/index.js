import express from "express";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js"
import OrderRoute from "./routes/OrderRoute.js"
import VendorRoute from "./routes/VendorRoute.js"
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js"
import dotenv from "dotenv";
dotenv.config();

const app = express();

try{
    await db.authenticate();
    console.log('Databse Connected...');
} catch (error) {
    console.log(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

app.use(ProductRoute);
app.use(OrderRoute);
app.use(VendorRoute);
app.use(router);




app.listen(5000, ()=> {
    console.log('Server up and running...');
});

