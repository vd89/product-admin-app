import { compareSync } from 'bcrypt';
import { createToken } from '../helper/jwtToken';
import User from '../model/User';

const name = 'Auth';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ name, status: 'Fail', msg: 'Invalid Credential' });
    const isMatch = await compareSync(password, user.password);
    if (!isMatch) return res.status(400).json({ name, status: 'Fail', msg: 'Invalid Credential' });
    const payload = {
      user: {
        id: user.id,
      },
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
