import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://sanjeedofficial22:7902501645@cluster0.4jwfhmf.mongodb.net/foode-delivery")
    .then(()=>console.log("DB connected"));
}