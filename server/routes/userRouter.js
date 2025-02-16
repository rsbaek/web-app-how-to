//   <<Imports>>
const express = require('express');
const userController = require('../controllers/userController') 

// Create a new router
const userRouter = express.Router()


// User Login handler
userRouter.post('/login', userController.loginUser, (req, res) => {
  console.log('🐣 User Login Processed.')
  return res.status(200).json(res.locals.loginSuccessful)
})

module.exports = userRouter;