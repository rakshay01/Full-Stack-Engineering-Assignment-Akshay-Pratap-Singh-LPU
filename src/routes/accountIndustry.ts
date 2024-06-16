import { Router } from 'express';
import accountIndustryData from '../../data/AccountIndustry.json';

const router = Router();

router.get('/', (req, res) => {
  res.json(accountIndustryData);
});

export default router;
