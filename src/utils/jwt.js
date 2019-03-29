const jwt=require("jsonwebtoken");


const createjwt= id=>{
    const token=jwt.sign({id},process.env.JWT_KEY,{
        expiresIn:"20m"
    });
    return token;
};
// const verifytoken= tonken =>{
//     let decoded;
//     try{
//          decoded=jwt.verify(token,process.env.JWT_KEY);
//     }catch(e){
//         return null;
//     }
//    return decoded;

// };
const verifytoken=(token,id)=>{
    jwt.verify(token, process.env.JWT_KEY, (err, decoded)=> {
    if (err.name==="TokenExpiredError") {
              createjwt(id);
    }
}
)
}
module.exports={
    createjwt,
    verifytoken
}