const CookingPost = require('../../../models/CookingPost');
const path = require('path');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    let video = req.files.video;
    video.mv(path.resolve(__dirname, '../../../', '/upload/videos/', video.name),
    (err) => {
        if (mongoose.Types.ObjectId.isValid(req.params._id)) {
            CookingPost.findByIdAndUpdate(
                { _id: req.params._id },
                { 
                    ...req.body,
                    video: '/upload/videos/' + video.name
                },
                { new: true }
            )
            .populate('postedBy')
            .then((doc) => {
                if(doc) {
                    res.json(doc)
                } else {
                    res.send("No such cooking post exists");
                    console.log("No such cooking post exists");
                }
            }).catch((err) => {
                res.send(err);
                console.log(err);
            })
        }
    }) 
}