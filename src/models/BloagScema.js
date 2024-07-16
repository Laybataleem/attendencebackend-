const mongoose = require ('mongoose');
const BlogSchema= mongoose.Schema({
    BlogTitle: {
        type: String,
        required: true,
    },


    BlogBody: {
        type: String,
        required: true,
    },
    emailid: {   
        type: String,
        required: true,
    },
    
},

{
    timestamps:true
});
const Blog=mongoose.model('Blog',BlogSchema)
module.exports = Blog;
