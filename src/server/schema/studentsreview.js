var mongoose = require('mongoose');
const express = require('express');


const studentsReview = new mongoose.Schema(
{

            imgurl: String,
            name:String,
            description:String,    
            pointsGiven:Number,
});

module.exports=mongoose.model('studentsReview', studentsReview);