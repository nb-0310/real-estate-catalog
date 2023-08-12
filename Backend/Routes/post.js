// const express = require('express')
// const postRoute = express.Router()
// const Post = require('../schemamodel/post')

// const authMiddleware = require('../middleware/authentication')

// postRoute.get('/getPosts', authMiddleware,(req, res) => {
//     //console.log(req.headers.authorization)
//     const postId = Number(req.query.id)
//     let filter = {}
//     if(postId){
//         filter = {
//             id: postId
//         }
//     }
//     Post.find(filter).then(postData =>{
//         res.status(200).json({
//             message:'fetched post successfully',
//             data : postData
//     })
// }).catch(err =>{
//     res.status(500).json({
//     message: 'failed to fatch post',
//     error: err});
// });
// })
     

// postRoute.post('/createPost', authMiddleware, (req, res) => {
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
// let socialMediaPost = req.body;
// //console.log(req.userId)
// //console.log('h')
// const post = new Post({
//     title: socialMediaPost.title,
//     content : socialMediaPost.content,
//     author : req.userId
// })
// post.save().then((record) => {
//     res.status(201).json({
//         message: 'record saved successfully',
//         data : record
//      })
// })
// .catch(err =>{
//     res.status(500).json({
//         message: 'failed to save',
//         data : err
//      });
// });
// })

// module.exports = postRoute;