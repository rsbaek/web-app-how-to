const express = require('express');
const app = express();
const PORT = 8081;
const CORS = require('cors');

//          << Necessary >>
// Converts incoming json in to js objects.
app.use(express.json());
// CORS STUFF
app.use(CORS());
// idk what it does but it's necessary just keep it
app.use(express.urlencoded({ extended: true }))

// Import stuff?
const userRouter = require('./routes/userRouter')

// lets us know backend is running
app.get('/', (req, res) => {
    console.log('🫚 Root Directory Accessed.')
    return res.status(200).json("👋 Hello from the backend");
})

// Routing for the user "database"
app.use('/api/user', userRouter);

// Generic catch all for any bad requests
app.use((req, res) => {
    console.log('😶 404 Response Sent!');
    res.status(404).send('404 Page Not Found');
});

// Generic Placeholder errormessage
app.use((err, req, res, next) => {
    // Throw an error console log
    console.log("❌ Error Thrown")
    // Placeholder error if we fail to create error handling for the application
    const defaultError = {
        log: 'Express error handler caught an unknown error.',
        status: 500,
        message: { err: 'An error occured.'},
    };
    // Assign the error object any new error information that gets sent here
    const errorObj = Object.assign(defaultError, err);
    // slam that shit into the console log
    console.log(errorObj.log);
    // return the error status message and the error status code back to the requester
    return res.status(errorObj.status).send(errorObj.message)
})

app.listen(PORT, () => {
    console.log(`⛵ Server listening on port: ${PORT}`);
})

module.exports = app;