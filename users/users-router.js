const router = require('express').Router();

const Users = require('./users-model.js');

//authrequire here
const { checkLoggedIn } = require('../auth/authRequiredMiddleware.js');


router.get('/', checkLoggedIn, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

module.exports = router;