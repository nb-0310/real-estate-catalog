const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRoute = express.Router();
const User = require('../schemamodel/userloginschema');


userRoute.post('/register', (req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*');

let userData = req.body;
bcrypt.hash(userData.password, 10)
.then((encreptedPassword) =>{
    let user = new User({
        email : userData.email,
        password : encreptedPassword,
        confirmPassword : encreptedPassword,
      

    })
    user.save().then((userData) => {
        res.status(201).json({
            message: 'user registered saved successfully',
            data : userData
         })
    })
    .catch(err =>{
        res.status(500).json({
            message: 'failed to create user',
            error : err
         });
    });
    })
    .catch(err => {
        console.log('error while increpting')
    })
})


userRoute.post('/login', (req, res) => {
    const userData = req.body;
    User.findOne({email : userData.email}).then(user=>{ 
        if(user){
            return bcrypt.compare(userData.password, user.password).then(authStatus =>{
                if(authStatus){
                    return jwt.sign(
                        {
                            email: user.email,
                            id : user._id
                        },
                        'real estate project 10x academy',
                        {
                            expiresIn : '1h'
                        },(err, token) => {
                            if(err){
                                return res.json({
                                    message:'message token creation failed'
                                  
                                });
                            }
                            return res.json({
                                message:'authentication successful',
                                token : token
                            })
                        }
                    ) 
                    
                    
                        
                    
                }
                res.status(401).json({
                            message : 'aunthecation failed 1'
                        })
                res.status(401).json({
                    message : 'aunthecatin failed'
                })
            })
        }
    })
})



module.exports = userRoute;