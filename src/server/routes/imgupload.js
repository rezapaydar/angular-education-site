const imagemodel = require('../schema/img');
const fs=require('fs');
const path = require('path');
var express = require('express');
var imguploadRoute = express.Router();
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


// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

// var upload = multer({ storage: storage });


imguploadRoute.get('/files',async (req, res) => {
  let result = await imagemodel.find({});
  
  res.status(200).json(result);
});


imguploadRoute.get('/files/:filename',async (req,res)=>{
    let imgget =await imagemodel.find({name:req.params.filename});
    var data = getIcon(imgget.img.data.data);
    var img = Buffer.from(data, 'base64');

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': img.length
    });
    res.send(imgget); 
})


imguploadRoute.post('/upload',upload.single('image'),async (req, res, next) => {

    console.log(req.file);
    var obj = {
        name: req.file.originalname,
        desc: req.file.desc,
        path: req.file.path,
        type: req.file.mimetype
    }
    // imagemodel.({"desc": "lorem ipsum dolor isset"})
    imagemodel.create(obj);
    res.send('okkk').status('200')
    // res.status('200').send('ok!')

});

module.exports = imguploadRoute;