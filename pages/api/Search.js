const Productmodel = require("../../backend/models/Productmodel");
const db = require("../../backend/db");

db();

const searchitem = async (req,res)=>{
    try {
        if (req.method !== "GET") 
        throw new Error("Bad request");

        const {search} = req.query;
        const products = await Productmodel.find({$or:[
                                                 {title:{$regex:search,$options:'i'}},
                                                 {desc:{$regex:search,$options:'i'}}
                                            ]});
        if(products)
        res.status(200).send(products);
         
      } catch (e) {
        res.status(400).send({ message: e.message });
      }
}
export default searchitem;