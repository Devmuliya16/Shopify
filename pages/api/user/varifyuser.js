const jwt = require('jsonwebtoken')

export default function verifyuser(logic){
    return async(req,res)=>{
        try{
            const {token} = JSON.parse(req.headers.authtoken);
            const verify = jwt.verify(token,process.env.SECRET_KEY);
            if(verify){
                req.userid = verify.id;
                return await logic(req,res);
            }
            else
            throw new Error("invalid user");
        }catch(err){
            console.log(err.message)
            return res.status(400).send({message:err.message})
        }
    }
}