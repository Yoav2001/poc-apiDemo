import express from 'express'
import routerCard from "./routerCard"
import controlles from '../../controlles';

const router = express.Router();
//in all cards i cant do the path / because it think i go the /:cardId without give id
// so i go /all
router.get('/all',controlles.getAllFinalAnswers);
router.get('/:cardId',controlles.getallFinalAnswersOfCardQuestion);
router.post('/addNewFinalCard',controlles.addNewFinalAnswerCard)
router.patch('/update',controlles.updateFinalAnswer);

export default router;

