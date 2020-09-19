import React from 'react';

const Products = () => {
  return (
    <div>
      <h2 className='my-2'>Products for Sale</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th className='hide-sm'>Description</th>
            <th className='hide-sm'>Category</th>
            <th>Variant</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iphone 7</td>
            <td className='hide-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim perspiciatis ex, adipisci blanditiis
              numquam cupiditate illum corrupti voluptas cum dolor sunt dolorem nostrum deserunt repudiandae earum rem
              eum. Tempora, beatae.
            </td>
            <td className='hide-sm'>Mobile</td>
            <td>
              <td>
                {' '}
                <span role='img'> ☎️</span> 1
              </td>
              <td>
                <span role='img'> ☎️</span>2
              </td>
              <td>
                {' '}
                <span role='img'> ☎️</span>3
              </td>
            </td>
            <td>
              <h4>Active</h4>| <h4>Inactive</h4>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
              <button className='btn btn-success'>Update</button>
            </td>
          </tr>
          <tr>
            <td>Iphone 7</td>
            <td className='hide-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim perspiciatis ex, adipisci blanditiis
              numquam cupiditate illum corrupti voluptas cum dolor sunt dolorem nostrum deserunt repudiandae earum rem
              eum. Tempora, beatae.
            </td>
            <td className='hide-sm'>Mobile</td>
            <td>
              <td>
                {' '}
                <span role='img'> ☎️</span>1
              </td>
              <td>
                <span role='img'> ☎️</span>2
              </td>
              <td>
                {' '}
                <span role='img'> ☎️</span>3
              </td>
            </td>
            <td>
              <h4>Active</h4>| <h4>Inactive</h4>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
              <button className='btn btn-success'>Update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
