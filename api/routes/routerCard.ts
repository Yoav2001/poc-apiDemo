import express from 'express'
import controlles from '../controlles'



const router = express.Router();
router.get('/card/firstCard',controlles.AllData);//first card
router.get('/card/:CardId',controlles.getTheCard );//FA /QA
//get a card id and return all final answers 
router.get('/finalAnswerOfCard/:CardId',controlles.getallFinalAnswersOfCardQuestion);

router.get('/MostClicked/:CardId',controlles.getMostPopularFinalAnswer);

//gets a cardID and sends back all the FA ordered by most clicked
// router.get('/MostClicked/:CardId',controlles.getMostClickedInTheTree);
// //get all card that ahmash is true
router.get('/InchargeSelected',controlles.getInchargeSelected);//

// router.get('/dataarray',controlles.getDataArray)
// router.get('/Answers',controlles.getAnswerArray)

router.patch('/updateCard',controlles.updateCard)

export default router;