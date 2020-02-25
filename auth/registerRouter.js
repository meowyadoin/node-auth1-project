const router = require('express').Router();

const { validateRequestBody } = require('./authRequiredMiddleware.js');

//bcrypt here
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

// /api/register <-- Remember in apiRouter i have already set this routers base URL to /register
router.post('/', validateRequestBody, (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(savedUser => {
            res.status(201).json(savedUser);
        })
        .catch(err => {
            res.status(500).json({
                message: 'There was an error trying to register the user',
                error: err
            });
        });
});



module.exports = router;