const name = 'Product';

export const createProduct = async (req, res, next) => {
  try {
    return res.status(200).json({ name, status: 'Success', msg: 'This is the Product Create route' });
  } catch (err) {
    next(err);
  }
};
