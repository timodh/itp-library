const router = require('express').Router();
let Reservation = require('../models/reservation.model');

router.route('/').get((req, res) => {
    Reservation.find()
        .then(reservation => res.json(reservation))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const bookingID = req.body.bookingID;
    const bookID = req.body.bookID;
    const studentID = req.body.studentID;
    const status = req.body.status;
    const bookingEndDate = req.body.bookingEndDate;
    
    const newReservation = new Reservation({
        bookingID,
        bookID,
        studentID,
        status,
        bookingEndDate,
    });

    newReservation.save()
    .then(() => res.json('Reservation added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;