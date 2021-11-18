
const jwt=require('jsonwebtoken');
const User=require('./userSchema');
const authenticate=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verifytoken=jwt.verify(token,process.env.SECRET);

        const rootuser=await User.findOne({_id:verifytoken._id,"tokens.token":token})
        if(!rootuser){
            throw new Error("user not found");
        }
        req.token=token;
        req.rootuser=rootuser;
        req.userID=rootuser._id;

        next();
    }catch{
        res.status(401).send("Unauthorised");
    }
}
module.exports=authenticate;