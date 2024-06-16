import { Router } from 'express';
import teamData from '../../data/Team.json';

const router = Router();

router.get('/', (req, res) => {
  res.json(teamData);
});

export default router;
