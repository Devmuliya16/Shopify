const Productmodel = require("../../../backend/models/Productmodel");
const Ordermodel = require("../../../backend/models/Ordermodel")
const db = require("../../../backend/db");
const jwt = require("jsonwebtoken");


db();

const addproduct = async (req,res)=>{
    try{
        if(req.method != 'POST')
        throw new Error("invalid type");
        const {title,image,desc,category,size,colors,price,inStock} = req.body;

        const product =await  Productmodel.create({
            title:title,
            image:image,
            desc:desc,
            category:category,
            size:size,
            colors:colors,
            price:price,
            inStock:inStock
        })
        if(product)
        return res.status(200).send({message:"success"});

    }catch(err){
        return res.status(400).send({message:err.message});
    }
}


const getcategory = async (req,res)=>{
    try{   
        if(req.method != 'GET')
        throw new Error("invalid type");

        const productlist = await Productmodel.find({category:req.query.category});
        if(productlist)
        return res.status(200).send(productlist);

    }catch(err){
        console.log(err.message);
        return res.status(400).send({message:err.message});
    }
}

const listorders = async (req,res)=>{
    try{
        if(req.method!='GET')
        throw new Error("invalid type");
        const total = await Ordermodel.countDocuments({status:req.query.status});
        const orderlist = await Ordermodel.find({status:req.query.status}).skip((req.query.page-1)*5)
        .limit(5).populate({path:"products.productId",select:"title image inStock category price"});
        if(orderlist){
            return res.status(200).send({orderlist,page:parseInt(req.query.page),pages:Math.ceil(total/5)});
        }
    }catch(err){
        console.log(err.message);
        return res.status(400).send({message:err.message});
    }
}

const deleteproduct = async (req,res)=>{
    try{   
        if(req.method != 'DELETE')
        throw new Error("invalid type");

        const productlist = await Productmodel.findByIdAndDelete(req.query.id);
        if(productlist)
        return res.status(200).send(productlist);

    }catch(err){
        return res.status(400).send({message:err.message});
    }
}

const setstatus = async (req,res)=>{
    try{   
        if(req.method != 'GET')
        throw new Error("invalid type");
        const orderlist = await Ordermodel.findByIdAndUpdate(req.query.id,{status:req.query.status});
        if(orderlist)
        return res.status(200).send(orderlist);

    }catch(err){
        console.log(err.message)
        return res.status(400).send({message:err.message});
    }
}


 const varifyadmin = (logic)=>{
    return async (req,res)=>{
        const auth = req.cookies.Auth;
        const verify = jwt.verify(auth,process.env.SECRET_KEY)
        if(verify.id == process.env.ADMIN_ID)
        await logic(req,res);
        else
        return res.status(400).send({message:"invalid user"})
    }
}


const api = async (req,res)=>{
    var func;
    switch (req.query.slug) {
        case "add":
            func=addproduct(req,res);
            break;
        case "getcategory":
            func=getcategory(req,res);
            break;
        case "delete":
            func=deleteproduct(req,res);
            break;
        case "listorders":
            func=listorders(req,res);
            break;
        case "setstatus":
            func=setstatus(req,res);
            break;
        default:
            res.send(req.query);
            break;
    }
    return func;
}
export default varifyadmin(api);