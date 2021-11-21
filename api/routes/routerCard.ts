import express from 'express'
import controlles from '../controlles'



const router = express.Router();
// router.post('/card',controlles.addNewCard)
router.get('/card/firstCard',controlles.getTheFirstCard);//first card
// router.get('/card/:CardId',controlles.getCardByCardId );//FA /QA
//get a card id and return all final answers 
router.get('/finalAnswerOfCard/:CardId',controlles.getallFinalAnswersOfCardQuestion);
// router.get('/MostClicked/:CardId',controlles.getMostPopularFinalAnswer);
router.get('/InchargeSelected',controlles.getInchargeSelected);//
router.patch('/updateCard',controlles.updateCard)

//gets a cardID and sends back all the FA ordered by most clicked
// router.get('/MostClicked/:CardId',controlles.getMostClickedInTheTree);
// //get all card that ahmash is true

// router.get('/dataarray',controlles.getDataArray)
// router.get('/Answers',controlles.getAnswerArray)


export default router;