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

module.exports = { createStudent, getAllStudents };
