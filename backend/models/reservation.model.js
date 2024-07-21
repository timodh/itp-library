const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    bookingID : {
        type: Number,
        required : true,
        unique : true,
    },
    //bookID needs to be foreign key
    //studentID needs to be foreign key
    status : {
        type : String,
        //needs to be specific values
    },
    bookingEndDate : {
        type : Date,
        required : true,
    }, }, {
        timestamps : true,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;