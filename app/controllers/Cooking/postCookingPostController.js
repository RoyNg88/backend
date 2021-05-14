const CookingPost = require('../../../models/CookingPost');
const path = require('path');

module.exports = (req, res) => {
    let video = req.files.video;
    video.mv(path.resolve(__dirname, '../../../', '/upload/videos/', video.name),
    (err) => {
        CookingPost.create({
            ...req.body,
            video: '/upload/videos/' + video.name
        }, (err) => {
            res.send(err);
        })
        .populate('postedBy')
    })
}
