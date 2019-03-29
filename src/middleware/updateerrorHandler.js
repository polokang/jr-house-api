const joi=require("joi");
const {formatResponse}=require("../utils/helper");
function updateerrorHandler(req){
    const schema={
        email:
        joi
        .string()
        .email(),
        phone:
        joi
        .number()

    };
    return joi.validate(req,schema);
}
module.exports=(req,res,next)=>{
    const{error}= updateerrorHandler(req.params);
    if(error){
        return formatResponse(res, error.details[0].message, 400);
         
    }
        return next();
}