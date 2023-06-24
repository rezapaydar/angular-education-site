'use strict'

var express = require('express');
const Grid = require('gridfs-stream');
var mongoose = require('mongoose');

const fs = require('fs');

var generalRoute = express.Router();
const general = require('../schema/general');
// const studentsReviewModel = require('../schema/studentsreview');
// const topCoursesModel = require('../schema/topcourses');
// const topTeachersModel = require('../schema/topteachers');
const chunkSchema = require('../schema/chunkmodel');



generalRoute.get('/',async function(req,res){


       // ساختار داده‌ای برای ذخیره عکس با استفاده از GridFS
  //  const gfs = Grid(generals, mongoose.mongo);
 
   // خواندن فایل تصویر
  //  const readStream = fs.createReadStream('../../assets/images/teacher1.JPG');
 
   // ذخیره فایل تصویر در GridFS
  //  const writestream = gfs.createWriteStream({
  //    filename: 'teacher1.JPG',
  //    bucketName: 'images'
  //  });
 
   // نوشتن فایل تصویر به GridFS
  //  readStream.pipe(writestream);

    const generals = await general.find({})
    // const topCourses = await topCoursesModel.find({})
    // const topTeachers = await topTeachersModel.find({})
    // const studentsReview = await studentsReviewModel.find({})
    
    res.send({
      all:{
        general:generals,
        // topCourse:topCourses,
        // topTeacher:topTeachers,
        // studentsReviews:studentsReview
      }
    })
})

generalRoute.post('/set',async function(req,res){
  let body=req.body;
  const generals =await general.create({
    homeTitle:body.homeTitle,
    homeDescription:body.homeDescription,
    aboutProfile:{
      aboutTitle:body.aboutProfile.aboutTitle,
      aboutDescription:body.aboutProfile.aboutDescription,
      aboutPic:body.aboutProfile.aboutPic
    }
  })
  console.log(body);
  res.send('ok')

})

module.exports = generalRoute;