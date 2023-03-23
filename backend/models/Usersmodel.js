import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
   name:{
    type: String,
    required: true
   },
   role:{
      type: String,
      default: "user"
   },
   email:{
    type: String,
    required: true,
    unique:true
   },
   password:{
    type: String,
    required: true
   }
},{timestamps: true});
module.exports = mongoose.models.User || mongoose.model("User",UserSchema);;