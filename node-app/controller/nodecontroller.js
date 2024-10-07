// import Nodeapp  from "../model/nodemodel"
// import Nodeapp  from "../model/nodemodel";
import Nodeapp from '../model/nodemodel.js';


   const createdeep = async (req, res) => {
  try {
    const newdep = new Nodeapp(req.body);
    const { department } = newdep;

    const depExist = await Nodeapp.findOne({ department });
    if (depExist) {
      return res.status(200).json({ messgage: "department already exsit" });
    }

    const saveData = await newdep.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(400).json({ errormessage: error.message });
  }
};

   const getNode= async(req,res)=>{
    try {
        const nodeData= await Nodeapp.find();
        if(!nodeData || nodeData.length ===0){
            return res.status(404).json({mesg:"Depertment not found"})
        }
        res.status(200).json(nodeData)
    } catch (error) {
        res.status(400).json({ errormessage: error.message });
    }
}


const getdeptId= async(req,res)=>{
try {
    const id=req.params.id;
    const deptexist=await Nodeapp.findById(id);
    if(!deptexist){
        return res.status(404).json({mesg:"Depertment not found"})
    }
    res.status(200).json(deptexist)
} catch (error) {
    res.status(400).json({ errormessage: error.message });
}
}

const updatedept=async(req,res)=>{
    try {
        const id=req.params.id;
        const deptexist=await Nodeapp.findById(id);
        if(!deptexist){
            return res.status(404).json({mesg:"Depertment not found"})
        }
 const update= await Nodeapp.findByIdAndUpdate(id,req.body,{
    new:true
})
res.status(200).json(update);


    } catch (error) {
        res.status(400).json({ errormessage: error.message });
    }
}



export {createdeep,getNode,getdeptId,updatedept};