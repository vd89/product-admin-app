import Product from '../model/Product';

const nameMain = 'Product';

export const createProduct = async (req, res, next) => {
  try {
    const { name, description, category, status, } = req.body;
    let product = new Product({
      name,
      description,
      category,
      status,      
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
    const { variantName, price, img1, img2, img3 } = req.body;

    let product = await Product.findById(req.params.productID).populate('category', ['name']);
    if (!product) return res.status(400).json({ nameMain, status: 'Fail', msg: 'Product is not defined and added' });
    const newImg = [img1, img2, img3];
    const newVariant = {
      variantName,
      price,
      img: newImg
    };
    product.variant.unshift(newVariant);
    await product.save();
    return res.status(200).json({ nameMain, status: 'Success', product });
  } catch (err) {
    next(err);
  }
};

export const editProduct = async (req, res, next) => {
  try {
    const { name, description, category, variantName, img1, img2, img3, price } = req.body;
    let product = await Product.findById(req.params.productID);
    if (!product) return res.status(400).json({ nameMain, status: 'Fail', msg: 'Product is not defined and added' });
    const newImg = [img1, img2, img3];
    const newVariant = {
      variantName,
      price,
      img: newImg,
    };
    product.name = name;
    product.description = description;
    product.category = category;
    product.variant  =  [];
    product.variant.unshift(newVariant);
    await product.save();
    const updatedProd = await Product.findById(req.params.productID).populate('category', ['name']);
    return res.status(200).json({ nameMain, status: 'Success', updatedProd });
  } catch (err) {
    next(err);
  }
};



