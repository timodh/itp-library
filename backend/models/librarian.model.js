const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const librarianSchema = new Schema({
    staffID : {
        type : Number,
        unique : true,
        requred : true,
    },
    librarianID : {
        type : Number,
        unique : true,
        required : true,
    },
    role : {
    type : String,
    required : true
},
});

const Librarian = mongoose.model('Librarian', librarianSchema);

module.exports = Librarian;