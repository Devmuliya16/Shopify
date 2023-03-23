import mongoose from 'mongoose';

const Productschema  = new mongoose.Schema({
    title:{
        type:String,required:true
    },
    image:{
        type:String, default:"https://dummyimage.com/400x400"
    },
    desc:{
        type:String,required:true
    },
    category:{
        type:String,required:true
    },
    size :{ type:String },
    colors:[{
            type:String,
        }],
    price:{
        type:Number,required:true
    },
    inStock:{
        type:Number,required:true
    }
},{timestamps:true});

module.exports = mongoose.models.Product || mongoose.model("Product",Productschema);;