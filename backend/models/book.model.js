const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn : {
        type : Number,
        required : true,
        unique : true,
        trim : true,
        maxlength : 13
    },
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    bookDescription : {
        type : String,
        required : true
    },
    numberOfCopies : {
        type : Number,
        required : true
    },
    library : {
        type : String,
        required : true
    },
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;