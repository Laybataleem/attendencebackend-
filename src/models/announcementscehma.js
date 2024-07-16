const mongoose = require('mongoose');
const announcementSchema = mongoose.Schema({
    announcement: {
        type: String,
        required: true,
    },


},
    {
        timestamps: true
    });



const announcementdata = mongoose.model('announcement', announcementSchema);
module.exports = announcementdata;