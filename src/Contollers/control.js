const User = require('../models/StudentScehma.js');  // Ensure the schema file name is correct
const Blog = require('../models/BloagScema'); // Ensure the schema file name is correct


// User Signup or post new user
const userSignup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const data = { firstname, lastname, email, password };
        const user = new User(data);

        console.log(user);

        await user.save();
        res.status(201).send({    
            message: "User successfully signed up",
            user
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while signing up" });
    }
};

// User Login or get user by email
const loginUser = async (req, res) => {
    try {
        const email = req.query.email;

        const user = await User.findOne({ email });

        console.log(email);
        console.log(user);

        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ message: "No User Found" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while logging in" });
    }
};

// Get All Users
const getALLRequest = async (req, res) => {
    try {
        const allUsers = await User.find(); // This will give all users in the schema we defined
        res.status(200).send({
            message: "All users retrieved successfully",
            allUsers
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while retrieving users" });
    }
};
//delete
const deleteUser=async (req,res)=>{
    const user =req.query.email
    console.log(user)
    const userone = await User.deleteOne({ email:user }); //  <=  deleteOne just 
    console.log(userone)
    if(!userone){
    
    res.send("error quesry")  
    }else{
    const allUsers = await User.find();
    res.send(allUsers)
    
    }
    }
    
    //update user data or edit
    
    const UpdateUserData = async (req,res)=>{
        const data = req.body
        const user =req.query.email
    
        const updateuser = await User.updateOne({email:user}, data);// (uNIQUE ID }, DATA TO UPADTE)
    
        console.log(updateuser) 
        // console.log(userone)
        if(updateuser){

            const allUsers = await User.find({email:user}); 
            res.send({allUsers})   
        }else{
            res.send("not gettt quesry ")
    
        }
    
    }  
/////here user part is completed 

// Blog Post
const BlogPost = async (req, res) => {
    try {
        const { BlogTitle, BlogBody, emailid } = req.body;
        const data = { BlogTitle, BlogBody, emailid };
        const blog = new Blog(data);

        console.log(blog);

        await blog.save();
        res.status(201).send({
            message: "Blog post successfully uploaded",
            blog
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while posting the blog" });
    }
};

//get specific blog
const GetbyOne = async (req,res)=>{

    const email =req.query.email
    const blog = await Blog.find({emailid: email });

    console.log(email);
    console.log(blog);
try{
    if (blog) {
        res.status(200).send(blog);
    } else {
        res.status(404).send({ message: "No blog Found" });
    }
}
catch (e) {
    console.log(e);
    res.status(500).send({ error: "An error occurred while logging in" });
}
};
   


//delete
const deleteBlog=async (req,res)=>{
const user =req.query.email
console.log(user)
const userone = await User.deleteOne({ email:user }); //  <=  deleteOne just 
console.log(userone)
if(!userone){

res.send("error quesry")  
}else{
const allUsers = await User.find();
res.send(allUsers)

}
}

//update post 

const UpdateBlogData = async (req,res)=>{
    const data = req.body
    const user =req.query.id

    const updateuser = await Blog.updateOne({_id:user}, data);// (uNIQUE ID }, DATA TO UPADTE)update hu geya hay vesa to mager ager ap na dekhna hay tu 

    // console.log(user) 
    console.log(updateuser)
    if(updateuser){

        const allUsers = await User.findOne({_id:user});
console.log(allUsers)

        res.send({allUsers})   
    }else{
        res.send("not gettt quesry ")

    }

}  
const getALLBlog = async (req, res) => {
    try {
        const allUsers = await Blog.find(); // This will give all users in the schema we defined
        res.status(200).send({
            message: "All users retrieved successfully",
            allUsers
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while retrieving users" });
    }
};







module.exports = { userSignup, loginUser,UpdateUserData, BlogPost, getALLRequest,getALLBlog,GetbyOne,deleteUser,deleteBlog,UpdateBlogData};
