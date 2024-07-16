const express=require('express');
const cont = require('../Contollers/StudentCon.js')
const router = express.Router()
 
// router.post('/signup', cont.userSignup);      // SIGN UP COMPLETE
// router.get("/loginUser",cont.loginUser)        // lOGIN COMPLETE 
// router.put("/editUser",cont.UpdateUserData)   // EDIT USER   
// router.get("/deletebyemail",cont.deleteUser)  // DELETE USER COMPLETE
// router.get("/getallUser",cont.getALLRequest)  //get all user


// router.post('/blogdata',cont.BlogPost);   // POST BLOG COMPETE
// router.get("/getallblog",cont.getALLBlog)  // GET ALL BLOG COMPLETE
// router.put("/updatePost",cont.UpdateBlogData) // UPDATE BLOG COMPLETE
// router.get("/deleteblog",cont.deleteBlog)     // dlete
// router.get("/specificBlog",cont.GetbyOne)      // get specific blog


router.get('/getall',cont.getAllStudents);
router.post('/', cont.createStudent);

module.exports=router
