const jwt=require("jsonwebtoken");


const createjwt= id=>{
    const token=jwt.sign({id},process.env.JWT_KEY,{
        expiresIn:"15m"
    });
    return token;
};
const verifytoken= tonken =>{
    let decoded;
    try{
         decoded=jwt.verify(token,process.env.JWT_KEY);
    }catch(e){
        return null;
    }
   return decoded;

};
module.exports={
    createjwt,
    verifytoken
}