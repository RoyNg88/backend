const CookingPost = require('../../../models/CookingPost');
const mongoose = require('mongoose');

module.exports = (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params._id)) {
        CookingPost.findById(req.params._id)
        .populate('postedBy')
        .then((doc) => {
            if(doc) {
                console.log(doc);
                res.json(doc);
            } else {
                console.log(`No cooking post exist for this id: ${req.params._id}`);
                res.send(`No cooking post exist for this id: ${req.params._id}`)
            }
        }).catch((err) => {
            res.send(err);
            console.log(`Error in find 1 cooking: ${err}`);
        })
        
    }
}