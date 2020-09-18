import Category from '../model/Category';

const nameMain = 'Category';

export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({ name: name });
    await newCategory.save();
    return res.status(200).json({ nameMain, status: 'Success', newCategory });
  } catch (err) {
    next(err);
  }
};
export const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find().select('-createdAt -updatedAt');
    return res.status(200).json({ nameMain, status: 'Success', categories });
  } catch (err) {
    next(err);
  }
};

