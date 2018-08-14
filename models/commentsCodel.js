const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentsSchema = new Schema({
    NIC:{
        type:String,
        required:[true,'NIC field is empty']
    },
    id:{
        type:String,
        required:[true,'id field is empty']
    },
    name:{
        type:String,
        required:[true,'name field is empty']
    },
    ward:{
        type:String,
        required:[true,'ward field is empty']
    },
    assingDate:{
        type:String,
        required:[true,'assingDate field is empty']
    },
    doctorType:{
        type:String,
        required:[true,'doctorType field is empty']
    }
});

const Comments = mongoose.model('comments',CommentsSchema);
module.exports= Comments;