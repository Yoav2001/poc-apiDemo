import express from 'express'
import controlles from '../../controlles';

const router = express.Router();
router.get('/all',controlles.getAllCardQuestion);
export default router;

