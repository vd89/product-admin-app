import { Router } from 'express';
import { createCategory, getAllCategory } from '../../controller/categoryController';
import { addVariant, createProduct, editProduct, getAllProduct } from '../../controller/productController';
import { categoryRules, productRules, validate, variantRules, editProductRules } from '../../helper/inputValidators';
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

/* @route   GET api/product/category
   @desc    GET product category
   @access  Private
*/
productRoute.get('/category', authMidd, getAllCategory);

/* @route   GET api/product
   @desc    GET All Products 
   @access  Private
*/
productRoute.get('/', authMidd, getAllProduct);


/* @route   PUT api/product/:productID
   @desc    Add Variants
   @access  Private
*/
productRoute.put('/:productID', authMidd, variantRules(), validate, addVariant);

/* @route   PUT api/product/edit/:productID
   @desc    Edit Product
   @access  Private
*/
productRoute.put('/edit/:productID', authMidd, editProductRules(), validate, editProduct);


export default productRoute;
