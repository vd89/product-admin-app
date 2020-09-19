import React from 'react';

const AddVariant = () => {
  return (
    <section className='container'>
      <h3 className='text-primary'>Add Variants </h3>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add a new product and with the detail and description of the product
      </p>
      <small>* = required field</small>
      <form className='form'>
        <div className='form-group'>
          <input type='text' placeholder='* Variant Name' name='variantName' required />
        </div>
        <div className='form-group'>
          <input type='text' placeholder='* Variant Price' name='price' required />
        </div>
        <div className='form-group'>
          <input type='text' placeholder='Variant image url' name='img1' required />
          <input type='text' placeholder='Variant image url' name='img2' required />
          <input type='text' placeholder='Variant image url' name='img3' required />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
      </form>
    </section>
  );
};

export default AddVariant;
