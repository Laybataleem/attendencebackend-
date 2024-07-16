const handleValidationError=(message,statusCode)=>{
    const error=new Error(message);
    error.statusCode=statusCode;
    throw error;
};
 const errorHandler=(error,req,res,next)=>{
    const statusCode=error.statusCode|| 500;
    const message = error.message || "internal server error";
    res.status (statusCode).json({success:false,message})
}


module.exports = {handleValidationError,errorHandler};