import express from "express";

// import createdep from '../controller/nodecontroller'
import {createdeep,getNode,getdeptId,updatedept} from '../controller/nodecontroller.js'

const route= express.Router();

route.post("/dept",createdeep);
route.get("/dept",getNode);
route.get("/dept/:id",getdeptId)
route.put("/dept/:id",updatedept);



// module.exports= route;
export default route