const router = require('express').Router();
let Librarian = require('../models/Librarian.model');

router.route('/').get((req, res) => {
    Librarian.find()
        .then(librarian => res.json(librarian))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const staffID = req.body.staffID;
    const librarianID = req.body.librarianID;
    const role = req.body.role;
    
    const newLibrarian = new Librarian({
        staffID,
        librarianID,
        role,  
    });

    newLibrarian.save()
    .then(() => res.json('Librarian added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;