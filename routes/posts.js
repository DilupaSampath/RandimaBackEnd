const express = require('express');
const router = express.Router();
const Posts = require('../models/postsModel');


router.get('/posts', function (req, res , next) {
    // res.send({ type: 'GET' });
    Posts.find({}).then(function(posts){
        res.send(posts);
    });

});
router.post('/upload', function(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
   
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
   
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('C:/Users/madsampath/Desktop/asd/filename.jpg', function(err) {
      if (err)
        return res.status(500).send(err);
   
      res.send('File uploaded!');
    });
  });
//get one doctor
router.get('/posts/:id', function (req, res , next) {
    // res.send({ type: 'GET' });
    Posts.findOne({_id:req.params.id}).then(function(posts){
        res.send(posts);
    });
});

//add new ninja to DB
router.post('/posts', function (req, res , next) {
    Posts.create(req.body).then(function(posts){
        res.send(posts);
    }).catch(next);
   });

//update ninja in DB
router.put('/posts/:id', function (req, res , next) {
    // res.send({ type: 'PUT' });
    Posts.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Posts.findOne({_id:req.params.id}).then(function(posts){
            res.send(posts);
        });

    });

});

router.delete('/posts/:id', function (req, res , next) {
    Posts.findByIdAndRemove({_id:req.params.id}).then(function(posts){
        res.send(posts);
    });

});

module.exports = router;    