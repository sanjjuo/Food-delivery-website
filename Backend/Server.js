import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js";

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())  // it is used for parsing by using this json when we get request from frontend to backend
app.use(cors())  //we can access the backend from any frontend

// db connection
connectDB();


// api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static("uploads"))
app.use("/api/user", userRouter);
app.use("/api/cart" ,cartRouter);


app.get("/",(req,res)=>{
    res.send("ApI")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost: ${port}`);
})
