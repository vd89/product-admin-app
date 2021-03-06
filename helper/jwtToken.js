import { sign, verify } from 'jsonwebtoken';
import config from 'config';

export const createToken = async (payload) => {
  return await sign(payload, config.get('JWTSecret'), { expiresIn: '10h' });
};
export const decodeToken = async (token) => {
  return await verify(token, config.get('JWTSecret'));
};
