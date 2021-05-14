const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CookingPostSchema = new Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    video: String,
    notice: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    likes: [{     
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }     
    }],
});

const CookingPost = mongoose.model('CookingPost', CookingPostSchema);
module.exports = CookingPost;