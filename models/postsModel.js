const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    user: {
        type: String,
        required: [true, 'user field is empty']
    },
    date: {
        type: String,
        required: [true, 'date field is empty']
    },
    title:{type:String,
        required:[true,'title field is empty']
    },
    body:{type:String,
        required:[true,'body field is empty']
    }
});


const Posts = mongoose.model('posts',PostsSchema);
module.exports= Posts;