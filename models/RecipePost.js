const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipePostSchema = new Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: String,
    body: String,
    ingredients: String,
    guide: String,
    username: String,
    image: String, 
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
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        }
    }]
});


const RecipePost = mongoose.model('RecipePost', RecipePostSchema);
module.exports = RecipePost;