const jwt=require("jsonwebtoken");

const createjwt= email=>{
    const token=jwt.sign({email},process.env.JWT_KEY,{
        expiresIn:"15m"
    });
    return token;
}
const verifytoken= tonken =>{
    let decode;
    const verify=jwt.verify(token,process.env.JWT_KEY)
}
