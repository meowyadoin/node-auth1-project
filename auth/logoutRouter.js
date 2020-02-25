const router = require('express').Router();

router.delete('/', (req, res) => {
    req.session ? req.session.destroy(err => err ? res.status(400).send('Error while trying to log out') : res.send('Log out successful!')) : res.end();
})


module.exports = router;