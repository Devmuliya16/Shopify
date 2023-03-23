import mongoose from 'mongoose'

// const mongoUrl = process.env.MONGO_URI;
// const mongoUrl = ;


const connectToMongo =async ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/shopify",()=>{
            console.log("successfully connected to database");
        })
    }catch(error){
        console.log(error);
        res.status(400).send({message:e.message});
    }
}   
module.exports = connectToMongo;