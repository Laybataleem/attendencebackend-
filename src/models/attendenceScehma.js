const mongoose = require ('mongoose');
const Student = require('./StudentScehma');
const attendenceSchema= mongoose.Schema({
    Student: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required: true,
      },
      status: {
        type: String,
        required: true,
        enum:["present","Absent"]
      },
      grade: {
          type: String,
        required: true,
      },
    
},

{
    timestamps:true
});



          
          const Studentattendence = mongoose.model('attendence', attendenceSchema);
          module.exports = Studentattendence;