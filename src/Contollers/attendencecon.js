const  Studentattendence = require('../models/attendenceScehma');    //is ky spelling ma masla tha 
const err= require('../middleware/errorhandler');
const Student = require('../models/StudentScehma');

const markattendence = async (req, res ,next) => {
    console.log(req.body)
  const { attendenceDate} = req.body;
  try {
  if(!attendenceDate  || !Array.isArray(attendenceDate) || attendenceDate.length === 0)
   {
     handleValidationError ("Attendence date is missing or invalid",404)
   }
    const attendenceRecords= await Promise.all(attendenceDate.map(async(record)=>{
    const [Student,status]=record;
    return await Studentattendence.create({Student,status});
  }));
  res.status(200).json({
    success: true,
    message:"attendence marked",
    attendenceRecords
  });
  }  catch(error) {
    next(error);
  }
}

const getAllAttendence = async (req, res,next) => {
  try {
    const  attendenceRecords = await  Studentattendence.find().populate("student","name regNo grade");
    res.status(200).json({
      success: true,
      attendenceRecords,
    });
  } catch (error) {
    next(error);
  }
};// ab ap kare continue okay

module.exports = {markattendence , getAllAttendence };
