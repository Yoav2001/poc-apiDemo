import express from 'express'
import routerCard from "./routerCard"
import controlles from '../../controlles';

const router = express.Router();
//in all cards i cant do the path / because it think i go the /:cardId without give id
// so i go /all
router.get('/all',controlles.getAllFinalAnswers);
router.get('/:cardId',controlles.getallFinalAnswersOfCardQuestion);

export default router;

