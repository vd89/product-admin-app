import React from 'react';
import AddCategory from './AddCategory';
import AddVariant from './AddVariant';

const AddProduct = () => {
  return (
    <section className='container'>
      <h1 className='large text-primary'>Add An Product</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add a new product and with the detail and description of the product
      </p>
      <AddCategory />
      <small>* = required field</small>
      <form className='form'>
        <div className='form-group'>
          <input type='text' placeholder='* Product Name' name='name' required />
        </div>
        <div className='form-group'>
          <textarea name='description' cols='30' rows='5' placeholder='Description of Product'></textarea>
        </div>
        <div className='form-group'>
          <select name='status'>
            <option>* Select Professional Status</option>
            <option value='Developer'>Developer</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>Add the Category</small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
      <AddVariant />
    </section>
  );
};

export default AddProduct;
