module.exports =  {
    checkLoggedIn,
    validateRequestBody
};


// check session middleware
function checkLoggedIn(req, res, next) {
    req.session.loggedin ? next() : res.status(400).json({ message: "Please log in first!" });
};

// checks the req.body to make sure the user has supplied the username and passoword before submitting a request
function validateRequestBody(req, res, next) {
    let { username, password } = req.body;
    username && password ? next() : res.status(401).json({ message: 'Please provide a username and password.' });
};