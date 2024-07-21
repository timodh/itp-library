const router = require('express').Router();
let Tag = require('../models/tag.model');

router.route('/').get((req, res) => {
    Tag.find()
        .then(tag => res.json(tag))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const tag = req.body.tag;

    const newTag = new Tag({
        tag
    });

    newTag.save()
    .then(() => res.json('Tag added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;