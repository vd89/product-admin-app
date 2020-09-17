import { Router } from 'express';
import { getUserData, login } from '../../controller/authController';
import { loginRules, validate } from '../../helper/inputValidators';
import auth from '../../middleware/authMidd';

const authRoute = new Router();

/* @route   GET api/auth/test
   @desc    Test Route
   @access  Public
*/

authRoute.get('/test', async (req, res, next) => {
  try {
    return res.status(200).json({ name: 'Auth', status: 'Success', msg: 'This is the Auth Route' });
  } catch (err) {
    next(err);
  }
});

/* @route   GET api/auth
   @desc    Auth User Data
   @access  Private
*/

authRoute.get('/',auth, getUserData);

/* @route   Post api/auth
   @desc    Login Route
   @access  Public
*/

authRoute.post('/', loginRules(), validate, login);

export default authRoute;
