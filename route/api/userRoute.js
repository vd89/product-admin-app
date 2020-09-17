import { Router } from 'express';
import { registerUser } from '../../controller/userController';
import { registerRules, validate } from '../../helper/inputValidators';


const userRoute = new Router();

/* @route   GET api/user
   @desc    Test Route
   @access  Public
 */
userRoute.get('/', async (req, res, next) => {
  try {
    return res.status(200).json({ name: 'User', status: 'Success', msg: 'This is the user Route' });
  } catch (err) {
    next(err);
  }
});

/* @route   POST api/user
   @desc    Register User 
   @access  Public
 */
userRoute.post('/', registerRules(), validate, registerUser);
export default userRoute;
