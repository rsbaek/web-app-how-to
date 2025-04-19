//   <<Imports>>
import { Router } from 'express';
import { loginUser } from '../controllers/userController'; 

// Create a new router
const userRouter = Router()


// User Login handler
userRouter.post('/login', loginUser, (req, res) => {
  console.log('🐣 User Login Processed.')
  return res.status(200).json(res.locals.loginSuccessful)
})

export default userRouter;