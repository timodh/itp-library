const router = require('express').Router();
let ViewingHistory = require('../models/viewingHistory.model');

router.route('/').get((req, res) => {
    ViewingHistory.find()
        .then(viewingHistory => res.json(viewingHistory))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const sequenceNumber = req.body.sequenceNumber;
    const timeStamp = req.body.timeStamp;
    const studentID = req.body.studentID;
    const bookID = req.body.bookID;

    const newViewingHistory = new ViewingHistory({
        sequenceNumber,
        timeStamp, 
        studentID, 
        bookID
    });

    newViewingHistory.save()
    .then(() => res.json('ViewingHistory added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;