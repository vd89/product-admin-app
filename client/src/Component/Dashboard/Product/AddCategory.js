import React from 'react';

const AddCategory = () => {
  return (
    <section className='container'>
      <h3 className='text-primary'>Add Category</h3>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add a new product and with the detail and description of the product
      </p>
      <small>* = required field</small>
      <form className='form'>
        <div className='form-group'>
          <input type='text' placeholder='* Product Category' name='name' required />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
      </form>
    </section>
  );
};

export default AddCategory;
