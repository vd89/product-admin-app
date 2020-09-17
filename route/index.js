import { Router } from 'express';
import userRoute from './api/userRoute';

const router = Router();

// Api route and test route

router.get('/', async (req, res, next) => {
  try {
    return res.status(200).json({ name: 'API', status: 'IT_Works', msg: 'Yes, server is running ' });
  } catch (error) {
    next(error);
  }
});

// User Routes
router.use('/user', userRoute);
export default router;
