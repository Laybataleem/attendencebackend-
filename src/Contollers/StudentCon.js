const  Student  = require('../models/StudentScehma.js');    //is ky spelling ma masla tha 
const err= require('../middleware/errorhandler');

const createStudent = async (req, res ,next) => {
  const { name, regNo, grade } = req.body;
  try {
    if (!name || !regNo || !grade) {
      return err.handleValidationError("Please fill in all fields", 404);
    }
    await Student.create({ name, regNo, grade });
    res.status(200).json({
      success: true,
      message: "Student created",
    });
  }  catch(error) {
    next(error);
  }
}; 
const getAllStudents = async (req, res,next) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    next(error);
  }
};// ab ap kare continue okay
const UpdateStudentData = async (req,res)=>{
  const data = req.body
  const user =req.query.regNo

  const updateuser = await Student.updateOne({regNo:user}, data);// (uNIQUE ID }, DATA TO UPADTE)

  console.log(updateuser) 
  // console.log(userone)
  if(updateuser){

      const allUsers = await Student.find(); 
      res.send({allUsers})   
  }else{
      res.send("not gettt quesry ")

  }
}  
const deleteStudent=async (req,res)=>{
  const user =req.query.regNo
  console.log(user)
  const userone = await Student.deleteOne({ regNo:user }); //  <=  deleteOne just 
  console.log(userone)
  if(!userone){
  
  res.send("error quesry")  
  }else{
  const allUsers = await Student.find();
  res.send(allUsers)
  
  }
  }


module.exports = { createStudent, getAllStudents , UpdateStudentData ,deleteStudent};
