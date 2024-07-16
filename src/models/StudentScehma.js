const mongoose = require ('mongoose');
const StudentSchema= mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      regNo: {
        type: String,
        required: true,
        unique: true,
      },
      grade: {
          type: String,
        required: true,
      },
    
},

{
    timestamps:true
});



          
          const Student = mongoose.model('Student', StudentSchema);
          module.exports = Student;