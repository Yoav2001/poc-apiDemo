import express from 'express'
import routerCard from "./routerCard"
import controlles from '../../controlles';

const router = express.Router();
router.get('/:cardId',controlles.getallFinalAnswersOfCardQuestion);

export default router;