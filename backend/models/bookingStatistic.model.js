const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingStatisticSchema = new Schema({
    bookID : {
        type : Number,
        required : true

    },
    timesBooked : {
        type : Number,
        required : true
    },
 }, {
        timestamps : true,
});

const BookingStatistic = mongoose.model('Booking Statistic', bookingStatisticSchema);

module.exports = BookingStatistic;