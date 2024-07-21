const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const viewingHistorySchema = new Schema({
    sequenceNumber : {
        type : Number,
        unique : true,
        required : true,
    },
    timeStamp : {
        type : Date,
        unique : true,
        required : true,
    },
    bookID : {
        type : Number, 
        required : true
    },
    studentID : {
        type : Number, 
        required : true
    },
});

const ViewingHistory = mongoose.model('Viewing History', viewingHistorySchema);

module.exports = ViewingHistory;