const  announcementdata  = require('../models/announcementscehma');    //is ky spelling ma masla tha 
const err= require('../middleware/errorhandler');

const createannouncement = async (req, res ,next) => {
  const { announcement } = req.body;
  try {
    if (!announcement) {
      return err.handleValidationError("Please fill  fields", 404);
    }
    await  announcementdata.create({ announcement });
    res.status(200).json({
      success: true,
      message: "Announcement created",
    });
  }  catch(error) {
    next(error);
  }
}; 
const getAllannouncement = async (req, res,next) => {
  try {
    const  announcement = await  announcementdata.find();
    res.status(200).json({
      success: true,
      announcement,
    });
  } catch (error) {
    next(error);
  }
};// ab ap kare continue okay

module.exports = { createannouncement, getAllannouncement };
