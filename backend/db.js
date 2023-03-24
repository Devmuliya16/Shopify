import mongoose from 'mongoose'
mongoose.set('strictQuery', true);



const connectToMongo =async ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI,()=>{
            console.log("successfully connected to database");
        })
    }catch(error){
        console.log(error);
        res.status(400).send({message:e.message});
    }
}   
module.exports = connectToMongo;