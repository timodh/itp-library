const router = require('express').Router();
let BookTag = require('../models/bookTag.model');

router.route('/').get((req, res) => {
    BookTag.find()
        .then(bookTag => res.json(bookTag))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const tag = req.body.bookTag;
    const bookID = req.body.bookID;

    const newBookTag = new BookTag({
        tag,
        bookID
        });

    newBookTag.save()
    .then(() => res.json('BookTag added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;