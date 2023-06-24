var mongoose = require('mongoose');


const topTeachers = new mongoose.Schema(
{
        name: String,
        interest: String,
        imgurl: String,
        github:String, 
        facebook:String, 
        twitter:String, 
        instagram:String, 

});

module.exports=mongoose.model('topTeachers', topTeachers);