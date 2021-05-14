const CookingPost = require('../../../models/CookingPost');

module.exports = (req, res) => {
    CookingPost.find({})
    .populate('postedBy')
    .then((docs) => {
        res.json(docs);
    }).catch((err) => {
        console.log(`Error in all cooking: ${err}`);
        res.send(err);
    });
}