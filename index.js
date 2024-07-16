const express = require('express');
var cors = require('cors')      // yah install and connect kia hay 
const mongoose = require('mongoose');

const app = express();
const port = 8000;
app.use(cors())       
const  studentRouter= require('./src/routes/StudentRoutes.js');  
const  announcement= require('./src/routes/announcementRoutes.js');  
const attendence= require('./src/routes/attendenceRoute.js'); 

let connectToDatabase = require('./dbConnect')
app.use(express.json()); 

app.use('/',studentRouter );  
app.use('/alert',announcement );  
app.use('/attendence',attendence)

mongoose.set("strictQuery", false); 
connectToDatabase()   
app.listen(port, () => { 
    console.log(`App listening on port ${port}`);
});


