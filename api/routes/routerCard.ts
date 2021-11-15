import express from 'express'
const router = express.Router();

import   controlles from '../controlles'

router.get('/',controlles.AllData);//first card
router.get('/TheCard/:CardId',controlles.getTheCard );//FA /QA
//gets a cardID and sends back all the FA ordered by most clicked
router.get('/MostClicked/:CardId',controlles.getMostClickedInTheTree);
//get all card that ahmash is true
router.get('/InchargeSelected',controlles.getInchargeSelected);//

router.get('/dataarray',controlles.getDataArray)
router.get('/Answers',controlles.getAnswerArray)

router.patch('/updateCard',controlles.updateCard)



module.exports = router;