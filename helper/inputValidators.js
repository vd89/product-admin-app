import { body, validationResult } from 'express-validator';


export const registerRules = () => {
  return [
    body('email', 'Provide a valid email address').isEmail(),
    body('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ];
};
export const loginRules = () => {
  return [body('email', 'Email valid email address').isEmail(), body('password', 'Password is required').exists()];
};
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => {
    extractedErrors.push({ [err.param]: err.param, msg: err.msg });
  });

  return res.status(400).json({ errors: extractedErrors });
};



