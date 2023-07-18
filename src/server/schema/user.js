var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    channelName: String,
    channelDescription: String,
    email: String,
    username:String,
    password:String,
    telephone:String,
    isAdmin:Boolean,
    profilePicture:{
        name:String,
        desc:String,
        path:String,
        type:String,
    },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model('user', userschema);