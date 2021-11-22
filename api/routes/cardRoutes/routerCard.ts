import express from 'express'
import controlles from '../../controlles'
import finalAnswerRouter from './finalAnswerRouter'
import cardQuestionRouter from './questionCardRouter'

//api/card/
//api/card/qustionCard/answer
//api/card/qustionCard/
const router = express.Router();
// router.post('/card',controlles.addNewCard)
router.get('/firstCard',controlles.getTheFirstCard);//first card
router.get('/:cardId',controlles.getCardByCardId );//FA /QA
//get a card id and return all final answers 
router.get('/mostClicked/:cardId',controlles.getMostPopularFinalAnswer);
router.get('/inchargeSelected',controlles.getInchargeSelected);//
router.patch('/updateCard',controlles.updateCard)


router.use("/finalAnswer",finalAnswerRouter)
router.use("/cardQuestion",cardQuestionRouter)

export default router;