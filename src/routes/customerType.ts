import { Router } from 'express';
import customerTypeData from '../../data/CustomerType.json';

const router = Router();

router.get('/', (req, res) => {
  res.json(customerTypeData);
});

export default router;
