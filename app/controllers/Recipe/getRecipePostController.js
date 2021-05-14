const RecipePost = require('../../../models/RecipePost');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params._id)) {
        RecipePost.findById(req.params._id)
        .populate('postedBy')
        .then((doc) => {
            if(doc) {
                console.log(doc);
                res.json(doc);
            } else {
                console.log(`No recipe post exist for this id: ${req.params._id}`);
                res.send(`No recipe post exist for this id: ${req.params._id}`)
            }
        }).catch((err) => {
            res.send(err);
            console.log(`Error in find 1 recipe: ${err}`);
        })
    }
}