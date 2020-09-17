import { Router } from 'express';
import { login } from '../../controller/authController';
import { loginRules, validate } from '../../helper/inputValidators';

const authRoute = new Router();

/* @route   GET api/auth
   @desc    Test Route
   @access  Public
*/

authRoute.get('/', async (req, res, next) => {
  try {
    return res.status(200).json({ name: 'Auth', status: 'Success', msg: 'This is the Auth Route' });
  } catch (err) {
    next(err);
  }
});

/* @route   Post api/auth
   @desc    Login Route
   @access  Public
*/

authRoute.post('/', loginRules(), validate, login);

export default authRoute;
