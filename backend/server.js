const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect('***');


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection created successfully");
});

const bookRouter = require('./routes/book');
/*const reservationRouter = require('./routes/reservation');
const bookingStatisticRouter = require('./routes/bookingStatistic');
const bookTagsRouter = require('./routes/bookTags');
const librarianRouter = require('./routes/librarian');
const tagRouter = require('./routes/tag');
const viewingHistoryRouter = require('./routes/viewingHistory');
*/
app.use('/book', bookRouter);
/*app.use('/bookingStatistic', bookingStatistic);
app.use('/bookTags', bookTagsRouter);
app.use('/librarian', librarianRouter);
app.use('/tag', tagRouter);
app.use('/viewingHistory', viewingHistoryRouter);
*/
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

});