import Category from '../model/Category';

const name = 'Category';

export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = new Category(name);
    newCategory.save();
    return res.status(200).json({ name, status: 'Success', newCategory });
  } catch (err) {
    next(err);
  }
};
