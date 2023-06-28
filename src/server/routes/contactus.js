const express = require('express');
const contactus = express.Router()
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');


// [
//     check('fullname').notEmpty().withMessage('fullname is required'),
//     check('email').isEmail().withMessage('Invalid Email Address'),
//     check('telephone').notEmpty().withMessage('telephone is required'),
//     check('message').notEmpty().withMessage('Message is required')
// ]
// contactus.post('/send',function(req,res){
//     let body = req.body;
//     console.log(body);
//     const errors = validationResult(req);

// 		if(!errors.isEmpty())
// 		{
// 			res.send(errors);
// 		}
// 		else
// 		{
// 			const transporter = nodemailer.createTransport({
//                 host: 'smtp.gmail.com',
//                 port: 587,
//                 secure: false,
// 				auth : {
// 					user : 'rezapaydarhmd@gmail.com',
// 					pass : 'pqjrbdhxlmmnbtdy'
// 				}
// 			});

// 			const mail_option = {
// 				from : req.body.email,
// 				to : 'paydarrezahmd@gmail.com',
// 				subject : '',
// 				text : 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message
// 			};

// 			transporter.sendMail(mail_option);
//             res.send('okkk');
// 		}

// })

contactus.post('/send',async function(req,res){
    let body=req.body;
    console.log(body);
    const errors = validationResult(req);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth : {
            user : 'rezapaydarhmd@gmail.com',
            pass : 'pqjrbdhxlmmnbtdy'
        }
    });

    const mail_option = {
        from : req.body.email,
        to : 'paydarrezahmd@gmail.com',
        subject : '',
        text : 'Name: ' + req.body.name + '\nEmail: ' + req.body.email + '\nMessage: ' + req.body.message
    };

    transporter.sendMail(mail_option);
    
    res.send('ok')
  
})

module.exports = contactus;