import { Router } from 'express';
import productLineData from '../../data/ProductLine.json';

const router = Router();

router.get('/', (req, res) => {
  res.json(productLineData);
});

export default router;
