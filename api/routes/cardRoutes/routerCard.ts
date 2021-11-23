import express from 'express'
import controlles from '../../controlles'
import finalAnswerRouter from './finalAnswerRouter'
import cardQuestionRouter from './questionCardRouter'

//api/card/
//api/card/qustionCard/answer
//api/card/qustionCard/
const router = express.Router();
router.get('/firstCard',controlles.getTheFirstCard);
router.post('/addClick/:cardId',controlles.addNewClickToCard)
router.get('/inchargeSelected',controlles.getInchargeSelected);
router.get('/inchargeSelectedCount',controlles.getCountInchargeSelected);

router.get('/:cardId',controlles.getCardByCardId );//this req need to be the last req because of paramas
//get a card id and return all final answers 
router.get('/mostClicked/:cardId',controlles.getMostPopularFinalAnswer);
// router.patch('/updateCard',controlles.updateCard)

router.use("/finalAnswer",finalAnswerRouter)
router.use("/cardQuestion",cardQuestionRouter)

export default router;