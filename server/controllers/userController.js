// Import the users object
const users = require('../users')
// Initialize the empty controller object.
const userController = {};

// Controller to handle logins
userController.loginUser = (req, res, next) => {
    console.log("🔐 Login middleware reached.")
    res.locals.loginSuccessful = false;
    console.log("req.body", req.body)
    // check the users storage to see if the incoming user name & password exists
    // if no, invoke next() and send back an error response
    // if yes, send a success response and then invoke next
    try {
        for(let el of users) {
            // let matched = false
            // if(username = username && password = password) {
            //     matched = true;
            // }
            if(el.username === req.body.username ) {
                console.log("🔑 Username Successful!");
                // return next();
                if(el.password === req.body.password) {
                    console.log("User Password is correct:D")
                    res.locals.loginSuccessful = true;
                } 
            }
        }
        return next();
   } catch {((error) => {
        console.log('Loginuser Controller Errored Out!');
        return next({
            log: 'Middleware getMoreCharacters failed.',
            status: error,
            message: {
                err: 'swapiController.getMoreCharacters: ERROR: Check server logs for details',
            },
        });
   });
  } 
}

// Export the user controller
module.exports = userController;

