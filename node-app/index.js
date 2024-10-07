import  express from "express";
import mongoose from "mongoose"
const app= express();
import  route  from "./router/noderouter.js";
const port=4540;


mongoose.connect("mongodb://localhost:27017/nodeapp ")
.then((result) => {
    console.log('connected to Mongodb succeful');
}).catch((err) => {
    console.error(err);
});


app.use(express.json());


// app.get('/',(req,res)=>{
//     res.status(200).json({message:"API is running"})
// })

// app.post('/',(req,res)=>{
//     res.status(200).json({message:"API is running from post"})
// })

app.use("/api",route)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

