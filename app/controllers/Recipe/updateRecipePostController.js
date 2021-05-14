const RecipePost = require('../../../models/RecipePost');
const path = require('path');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '../../../', '/upload/images/', image.name),
    (err) => {
        if (mongoose.Types.ObjectId.isValid(req.params._id)) {
            RecipePost.findByIdAndUpdate(
                { _id: req.params._id },
                { 
                    ...req.body,
                    image: '/upload/images/' + image.name
                },
                { new: true }
            ).then((doc) => {
                if(doc) {
                    res.json(doc)
                } else {
                    res.send("No such recipe post exists");
                    console.log("No such recipe post exists");
                }
            }).catch((err) => {
                res.send(err);
                console.log(err);
            })
            .populate('postedBy')
        }
    }) 
}