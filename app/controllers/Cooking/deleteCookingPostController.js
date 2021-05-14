const CookingPost = require('../../../models/CookingPost');

module.exports = (req, res) => {
    CookingPost.deleteOne({ _id: req.params._id }, (err, docs) => {
        if(err !== null){
            console.log(`Error in delete 1 cooking: ${err}`);
        } else {
            res.json(docs);
        }
    })
    .populate('postedBy')
}