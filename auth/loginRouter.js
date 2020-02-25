const router = require('express').Router();
const { validateRequestBody } = require('./authRequiredMiddleware.js');
const bcrypt = require('bcryptjs');
const users = require('../users/users-model.js');

// log in
router.post('/', validateRequestBody, (req, res) => {
     const { username, password } = req.body;
     req.session.loggedin = false;

     users.findBy({ username })
          .first()
          .then(user => {
               if (user && bcrypt.compareSync(password, user.password)) {
                    req.session.loggedin = true;
                    console.log(req.session.cookie);
                    res.json({ message: `Welcome ${user.username}! You have successfully logged in!` });
               } else {
                    res.status(401).json({
                         message: 'Please provide the correct username and password.'
                    });
               };
          })
          .catch(err => {
               res.status(500).json({ message: 'There was a problem logging into the server', error: err });
          });
});

module.exports = router;