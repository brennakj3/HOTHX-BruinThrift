const mongoose = require('mongoose');

const Post = mongoose.model("Post", new mongoose.Schema({
body:{
    type: String,
    required: true
},
user: {
    type: String,
    required: true
},

img:
{
    data: Buffer,
    contentType: String
}

}));

module.exports = Post;