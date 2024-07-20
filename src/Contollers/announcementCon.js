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
const UpdateAnnouncment = async (req,res)=>{
  const data = req.body
  const AnnounceId =req.query.id

  const updateuser = await announcementdata.updateOne({_id:AnnounceId}, data);// (uNIQUE ID }, DATA TO UPADTE)
// mane logic bataye thy apku ap na kia hy nahi ab dekho app
  console.log(updateuser) 
  // console.log(userone)
  if(updateuser){

      const allUsers = await announcementdata.find(); 
      res.send({allUsers})   
  }else{
      res.send("not gettt quesry ")

  }
}  
const deleteAnnouncment=async (req,res)=>{
  const user =req.query.id
  console.log(user)
  const userone = await announcementdata.deleteOne({ _id:user }); //  <=  deleteOne just 
  console.log(userone)
  if(!userone){
  
  res.send("error quesry")  
  }else{
  const allUsers = await announcementdata.find();
  res.send(allUsers)
  // shi yeh to mne phly b try kia hova ab isko rontend me kesy lagye gy ? stuudent vala sahi nahi karu ? kroo naaa wse glt kia kia mne zra hightlightk rna abyyyyyyyyyyy at thi kaha jab ma kr raha tha yhi thi bs email iki jga id klikha or ik variable chnge kia 
  }
  }

module.exports = { createannouncement, getAllannouncement, UpdateAnnouncment,deleteAnnouncment};
