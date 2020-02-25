const router = require('express').Router();

const { checkLoggedIn } = require('../auth/authRequiredMiddleware.js');

const registerRouter = require('../auth/registerRouter.js');
const loginRouter = require('../auth/loginRouter.js');
const logoutRouter = require('../auth/logoutRouter.js');
const usersRouter = require('../users/users-router.js');
const restrictedRouter = require('../auth/restrictedRouter.js');

// /api/register
router.use('/register', registerRouter);

// /api/login
router.use('/login', loginRouter);

// api/logout
router.use('/logout', logoutRouter);

// /api/users
router.use('/users', usersRouter);

// /api/restricted
// because auth is here it makes it so that any sub routes i use in restrictedRouter
// will still need to be authorized
router.use('/restricted', checkLoggedIn, restrictedRouter);

// /api
router.get('/', (req, res) => {
    res.json({ message: 'api...is alive.'});
});

module.exports = router;