const express=require('express');
const cont = require('../Contollers/StudentCon.js')
const router = express.Router()
 


router.get('/getall',cont.getAllStudents);
router.post('/', cont.createStudent);
router.post('/updatestudent', cont.UpdateStudentData);
router.delete('/deletestudent', cont.deleteStudent);
module.exports=router
 