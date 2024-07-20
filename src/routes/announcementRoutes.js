const express=require('express');
const cont = require('../Contollers/announcementCon.js')
const router = express.Router()
 


router.get('/getallannouncement',cont.getAllannouncement);

router.post('/announcement', cont.createannouncement);
router.post('/updateannounement', cont.UpdateAnnouncment);
router.delete('/delete', cont.deleteAnnouncment);
module.exports=router
 