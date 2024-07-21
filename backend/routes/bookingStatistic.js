const router = require('express').Router();
let BookingStatistic = require('../models/bookingStatistic.model');

router.route('/').get((req, res) => {
    BookingStatistic.find()
        .then(bookingStatistic => res.json(bookingStatistic))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const bookID = req.body.bookID;
    const timesBooked = req.body.timesBooked;

    const newBookingStatistic = new BookingStatistic({
        bookID,
        timesBooked
        });

    newBookingStatistic.save()
    .then(() => res.json('BookingStatistic added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;