const topTeachers = require('../schema/topteachers');
const fs=require('fs');
const path = require('path');
var express = require('express');
var topTeachersRoute = express.Router();
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





topTeachersRoute.get('/all',async (req, res) => {
  let result = await topTeachers.find({});
  let sliced  = result.slice(-4)
  res.status(200).json(sliced);
});


topTeachersRoute.get('/all/:teacherName',async (req,res)=>{
    let imgget =await topTeachers.find({name:req.params.teacherName});
    var data = getIcon(imgget.img.data.data);
    var img = Buffer.from(data, 'base64');

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
    });
    res.send(imgget); 
})


topTeachersRoute.post('/set',upload.single('imgurl'),async (req, res, next) => {
    let body = req.body;
    console.log(req.file);
    console.log(req.body);
    var obj = {
        name: body.name,
        interest: body.interest,
        imgurl: req.file.path,
        github:body.github, 
        facebook:body.facebook, 
        twitter:body.twitter, 
        instagram:body.instagram, 
    }
    topTeachers.create(obj);
    res.send('okkk').status('200')
   

});

module.exports = topTeachersRoute;