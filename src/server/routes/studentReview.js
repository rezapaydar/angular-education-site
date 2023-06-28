const studentsReview = require('../schema/studentsReview');
const fs=require('fs');
const path = require('path');
var express = require('express');
var studentsReviewRoute = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({ 
    destination: (req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const type = path.extname(file.originalname)
        callback(null,String(new Date().getMinutes() + file.originalname))
    }
    
})
let upload = multer({storage:storage});





studentsReviewRoute.get('/all',async (req, res) => {
  let result = await studentsReview.find({});
  let sliced  = result.slice(-4)
  res.status(200).json(sliced);
});


studentsReviewRoute.get('/all/:reviewName',async (req,res)=>{
    let imgget =await studentsReview.find({name:req.params.reviewName});
    var data = getIcon(imgget.img.data.data);
    var img = Buffer.from(data, 'base64');

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
    });
    res.send(imgget); 
})


studentsReviewRoute.post('/set',upload.single('imgurl'),async (req, res, next) => {
    let body = req.body;
    console.log(req.file);
    console.log(req.body);
    var obj = {
        name: body.name,
        criticalOpinion: body.criticalOpinion,
        imgurl: req.file.path,
        pointsGiven:body.pointsGiven, 
    }
    studentsReview.create(obj);
    res.send('okkk').status('200')
   

});

module.exports = studentsReviewRoute;