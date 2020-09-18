import { decodeToken } from '../helper/jwtToken';

export default async function authMidd(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ name: 'Auth', status: 'Fail', msg: 'No Token, authorization denied' });
  try {
    const decoded = await decodeToken(token);
    req.user = decoded.user;
    next();
  } catch (error) {
    next(error);
  }
};
