import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true  //if we will store data without name or any (price,image etc..) it will not stored if "required:true" is not used
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;

