import { url } from 'gravatar';
import User from '../model/User';
import { createToken } from '../helper/jwtToken';

const name = 'register';

export const registerUser = async (req, res, next) => {
  try {
    const { email, password, mobileNumber } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ name, status: 'Fail', msg: 'User already register' });
    const avatar = url(email, { s: '200', r: 'pg', d: 'mm' });
    user = await User.create({ email, avatar, mobileNumber });
    await user.setPassword(password);

    const payload = {
      user: { id: user.id },
    };
    const token = await createToken(payload);
    user.password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;
    return res.status(200).json({ name, status: 'Success', user, token });
  } catch (err) {
    next(err);
  }
};
