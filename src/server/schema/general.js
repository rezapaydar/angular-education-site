var mongoose = require('mongoose');
const express = require('express');


const generals = new mongoose.Schema(
{
    homeTitle:String,
    homeDescription:String,
    aboutProfile:{
        aboutTitle:String,
        aboutDescription:String,
        aboutPic:String
    },  
});



module.exports=mongoose.model('general', generals);