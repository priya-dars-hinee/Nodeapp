import  mongoose from "mongoose";

const nodeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true
    }
})

const Nodeapp = mongoose.model("Nodeapp",nodeSchema);
export default Nodeapp;
