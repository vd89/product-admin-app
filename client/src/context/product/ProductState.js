import React, { useReducer } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import {
  CATEGORY_ADD,
  GET_CATEGORY,
  ADD_PRODUCT,
  ADD_VARIANT,
  EDIT_VARIANT,
  GET_PRODUCTS,
  CLEAR_ERRORS,
} from '../type';
const ProductState = (props) => {
  const initialState = {
    products: null,
    product: null,
    error: null,
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return (
    <ProductContext.Provider value={{ product: state.product, error: state.error, products: state.products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
