import { Router } from 'express';
import inputValidators from '../../helper/inputValidators';

const { registerRules, validate } = inputValidators;

const userRoute = Router();

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
userRoute.post('/', registerRules(), validate, (req, res) => {
  return res.status(200).json({ msg: 'success' });
});
export default userRoute;
