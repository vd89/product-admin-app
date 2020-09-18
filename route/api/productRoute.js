import { Router } from 'express';
import { createCategory } from '../../controller/categoryController';
import { createProduct } from '../../controller/productController';
import { categoryRules, productRules, validate } from '../../helper/inputValidators';
import authMidd from '../../middleware/authMidd';

const productRoute = new Router();

/* @route   GET api/product/test
   @desc    Test Route
   @access  Public
*/
productRoute.get('/test', async (req, res, next) => {
  try {
    return res.status(200).json({ name: 'Product', status: 'Success', msg: 'This is the Product Route' });
  } catch (err) {
    next(err);
  }
});

/* @route   POST api/product/
   @desc    Add product
   @access  Private
*/
productRoute.post('/', authMidd, productRules(), validate, createProduct);

/* @route   POST api/product/category
   @desc    Add product category
   @access  Private
*/
productRoute.post('/category', authMidd, categoryRules(), validate, createCategory);

export default productRoute;
