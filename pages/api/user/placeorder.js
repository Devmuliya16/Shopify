import verifyuser from "./varifyuser";

const Ordermodel = require("../../../backend/models/Ordermodel");
const Usermodel = require("../../../backend/models/Usersmodel")
const db = require("../../../backend/db");

db();


const placeorder = async (req,res)=>{
    try{
        if(req.method!=='POST')
        throw new Error("invalid access");
        const id = req.userid;
        const user = await Usermodel.findById(id);
        const {name,email,company,phone,address,products,amount} = req.body
        if(user && amount!=0 && products.length!=0){
            const order =await Ordermodel.create({
                userId: user._id,
                name:name,
                email:email,
                company:company,
                phone:phone,
                address:address,
                products:products,
                amount:amount
            });
            res.status(200).send(order);
        }
        else
        throw new Error("invalid inputs")
    }catch(err){
        res.status(400).send({message:err.message})
    }
}

export default verifyuser(placeorder);