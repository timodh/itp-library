const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
    Book.find()
        .then(book => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const isbn = req.body.isbn;
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const bookDescription = req.body.bookDescription;
    const numberOfCopies = req.body.numberOfCopies;
    const library = req.body.library;

    const newBook = new Book({
        isbn,
        title,
        author,
        genre,
        bookDescription,
        numberOfCopies,
        library
    });

    newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route(':id').get((req, res) => {
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Book.findById(req.params.id).then(book => {
        book.isbn = req.body.isbn;
        book.title = req.body.title;
        book.author = req.body.author;
        book.genre = req.body.genre;
        book.bookDescription = req.body.bookDescription;
        book.numberOfCopies = req.body.numberOfCopies;
        book.library = req.body.library;

        book.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;