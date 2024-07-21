const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookTagsSchema = new Schema({
    tags : {
        type : String,
        required : true,
    },
    bookID : {
        type : Number, 
        required : true
    },
});

const BookTags = mongoose.model('Book Tags', bookTagsSchema);

module.exports = BookTags;