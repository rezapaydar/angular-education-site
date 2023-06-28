var mongoose = require('mongoose');
const express = require('express');


const studentsreview = new mongoose.Schema(
{

            imgurl: String,
            name:String,
            criticalOpinion:String,    
            pointsGiven:Number,
});

module.exports=mongoose.model('studentsreview', studentsreview);