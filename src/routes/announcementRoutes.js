const express=require('express');
const cont = require('../Contollers/announcementCon.js')
const router = express.Router()
 


router.get('/getallannouncement',cont.getAllannouncement);

router.post('/announcement', cont.createannouncement);

module.exports=router
 