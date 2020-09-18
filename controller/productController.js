import Product from '../model/Product';

const nameMain = 'Product';

export const createProduct = async (req, res, next) => {
  try {
    const { name, description, category, status, img1, img2, img3 } = req.body;
    let newImg = [img1, img2, img3];
    let product = new Product({
      name,
      description,
      category,
      status,
      images: newImg,
    });

    await product.save();
    return res.status(200).json({ nameMain, status: 'Success', product });
  } catch (err) {
    next(err);
  }
};
export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find().select('-createdAt -updatedAt');
    return res.status(200).json({ nameMain, status: 'Success', products });
  } catch (err) {
    next(err);
  }
};

export const addVariant = async (req, res, next) => {
  try {
    const { name, price, img1, img2, img3 } = req.body;

    let product = await Product.findById(req.params.productID);
    if (!product) return res.status(400).json({ nameMain, status: 'Fail', msg: 'Product is not defined and added' });
    const newImg = [img1, img2, img3];

    const newVariant = {
      name,
      price,
      img: newImg,
    };
    product.variant.unshift(newVariant);
    await product.save();
    return res.status(200).json({ nameMain, status: 'Success', msg: product });
  } catch (err) {
    next(err);
  }
};


