var mongoose = require('mongoose');
const express = require('express');


const topcourses = new mongoose.Schema(
{

        imgurl: String,
        name:String,
        description:String,    
}
)

module.exports=mongoose.model('topcourses', topcourses);