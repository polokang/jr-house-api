const joi=require("joi");
const {formatResponse}=require("../utils/helper");
function validation(req){
    const schema={
        email: 
        joi
        .string()
        .required()
        .email(),
        password:
        joi
        .string()
        .min(8)
        .required()
    };
    return joi.validate(req,schema);
}
module.exports=(req,res,next)=>{
    const{error}=validation(req.body);
     if(error){
      return formatResponse(res, error.details[0].message, 400);
       
  }
      return next();
    
  };