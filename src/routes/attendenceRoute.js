const express=require('express');
const cont = require('../Contollers/attendencecon.js')
const router = express.Router()
 


router.get('/getallatten',cont.getAllAttendence);

router.post('/attendence', cont.markattendence);

module.exports=router
 