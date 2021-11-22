// import {FinalAnswerCard} from './models/finalAnswerModel'
// import {QuestionCard} from './models/qcModel'
import type CardModel = require("./models/cardModel");
import type qcModel = require("./models/questionCardModel");
import type faModel = require("./models/finalAnswerModel");
import express from 'express'
import db from './dataPoc.json'
const cardData = db.data as (qcModel.QuestionCard | faModel.FinalAnswerCard)[];

const getButtomChilds=(card:qcModel.QuestionCard)=>{
    const arrFinalAnswers :faModel.FinalAnswerCard[]=new Array();

    getButtomChildsRekorsiv(card,arrFinalAnswers)
    return arrFinalAnswers;
}
const getButtomChildsRekorsiv=(c:qcModel.QuestionCard|faModel.FinalAnswerCard,arr:faModel.FinalAnswerCard[])=>{
 
    if(c.nextCards===null&&c.nextCards===undefined||c.type==="FinalAnswerCard"){
        arr.push(c) 
        return
    }
     c.nextCards?.map(c => getButtomChildsRekorsiv(c,arr))

}


const getFirstCard:CardModel.getTheFirstCard =()=>{
    return cardData[0]
}


const getCardByCardId:CardModel.getCardByCardId=(id:CardModel.Card["id"])=>{

    const theCard = cardData.find((item)=>item.id === id)
    return theCard;

}


const updateCard:CardModel.updateCard=(newCard:CardModel.Card)=>{
    const c:qcModel.QuestionCard|faModel.FinalAnswerCard|undefined=getCardByCardId(newCard.id)
    if(c===undefined){
        return undefined
    }

    c.cardTitle=newCard.cardTitle;
    c.ahmashSelected=newCard.ahmashSelected
    c.clicked=newCard.clicked;
   
    return c;
    

}


const getAllFinalAnswersOfCard:CardModel.getallFinalAnswerofCardQuestion=(id:CardModel.Card["id"])=>{

    const theCard = getCardByCardId(id)
    console.log(theCard);
    const finalAnswersArr:faModel.FinalAnswerCard[]=getButtomChilds(theCard as qcModel.QuestionCard)
    const uniqueAddresses = Array.from(new Set(finalAnswersArr.map(a => a.id)))
        .map(id => {
        return finalAnswersArr.find(a => a.id === id)
        })

    return uniqueAddresses;

}
const getPopularFinalAnswers:CardModel.getMostPopularFinalAnswerOfCardQuestion=(id:CardModel.Card["id"])=>{

     const theCard = getCardByCardId(id)
     const mostCommonFinalAnswers:faModel.FinalAnswerCard[]=getButtomChilds(theCard as qcModel.QuestionCard)
     mostCommonFinalAnswers.sort(function(a, b){return b.clicked-a.clicked});
     const mostPopularwithotDuplicate = Array.from(new Set(mostCommonFinalAnswers.map(a => a.id)))
     .map(id => {
     return mostCommonFinalAnswers.find(a => a.id === id)
     })

    return  mostPopularwithotDuplicate.slice(0,4)

}
const getInchargeSelectedCards:CardModel.getAllInchargeSelectedCards=()=>{
    const arrInChargeSelected:(qcModel.QuestionCard|faModel.FinalAnswerCard)[] =cardData.filter((item)=>Boolean(item.ahmashSelected));
    return arrInChargeSelected;
}

const getAllquestionOrFinalanswers:CardModel.getAllCardsByType=(typeCards:qcModel.QuestionCard["type"]|faModel.FinalAnswerCard["type"])=>{

    console.log(cardData.filter(c=> c.type===typeCards));
    
        return  cardData.filter(c=> c.type===typeCards)
}



const addNewQuestionCardAndConnect=()=>{



}
const addNewFaCardAndConnect=()=>{



}
export default {getFirstCard,getCardByCardId,updateCard,getInchargeSelectedCards,getPopularFinalAnswers,getAllFinalAnswersOfCard,getAllquestionOrFinalanswers}