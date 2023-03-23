import mongoose ,{Schema} from "mongoose";

const Orderschema = new mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    name:{
        first:{
            type:String,
            required:true
        },
        last:{
            type:String,
            required: true
        }
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String,
        default: "Personal"
    },
    phone:{
        type:Number,
        required:true
    },
    products:[{
        productId:{type:Schema.Types.ObjectId,ref:"Product"},
        quentity:{type:Number,default:1}
    }],
    address:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required: true
    },
    status:{
        type:String,
        enum:['Pending','Dispatched','Out for delivery','Delivered'],
        default:'Pending',
        required:true
    }
},{timestamps:true});

module.exports =mongoose.models.Order || mongoose.model("Order",Orderschema);