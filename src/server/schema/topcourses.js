var mongoose = require('mongoose');
const express = require('express');


const topCourses = new mongoose.Schema(
{

        imgurl: String,
        name:String,
        description:String,    
}
)

module.exports=mongoose.model('topCourses', topCourses);