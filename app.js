const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose =  require("mongoose");
const fileUpload = require('express-fileupload');


const app = express();
const port = 3000;
app.use(fileUpload());
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://172.22.220.19/curtin');
mongoose.Promise=global.Promise;


app.use('/postsModel',require('./routes/posts'));


app.listen(port, () =>{
    console.log("Server started on port : " +port);
});
