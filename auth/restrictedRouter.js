const router = require('express').Router();

// import restrticed routes
const restrictedUsersRouter = require('../users/restrictedUsers-router');

router.use('/users', restrictedUsersRouter);

router.get('/', (req, res) => {
    res.send('<h1>This is the restricted zone...only authenticated users allowed</h1>');
});

module.exports = router;