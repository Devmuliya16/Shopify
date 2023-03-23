import verifyuser from "./varifyuser";

const Ordermodel = require("../../../backend/models/Ordermodel");
const db = require("../../../backend/db");

db();


const listorder = async (req,res)=>{
    try{
        if(req.method!='GET')
        throw new Error("invalid access");
        const orders = await Ordermodel.find({userId:req.userid})
                                       .populate({path:"products.productId",select:"title image category size price"});
        if(orders){
            res.status(200).send(orders)
        }
        else
        throw new Error("invalid access")
    }catch(err){
        res.status(400).send({message:err.message})
    }
}
export default verifyuser(listorder)