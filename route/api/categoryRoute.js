import { Router } from 'express';
import { createCategory } from '../../controller/categoryController';
import { categoryRules, validate } from '../../helper/inputValidators';
import authMidd from '../../middleware/authMidd';

const categoryRoute = new Router();

/* @route   POST api/category/
   @desc    Add category
   @access  Private
*/
categoryRoute.post('/', authMidd, categoryRules(), validate, createCategory);

export default categoryRoute;
