import {FinalAnswerCard} from './models/finalAnswerModel'
import {QuestionCard} from './models/questionCardModel'
import type CardModel = require("./models/cardModel");

import express from 'express'
import db from './dataPoc.json'
const cardData = db.data as (QuestionCard | FinalAnswerCard)[];

const getButtomChilds=(card:QuestionCard)=>{
    const arrFinalAnswers :FinalAnswerCard[]=new Array();

    getButtomChildsRekorsiv(card,arrFinalAnswers)
    return arrFinalAnswers;
}
const getButtomChildsRekorsiv=(c:QuestionCard|FinalAnswerCard,arr:FinalAnswerCard[])=>{
 
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
    const c:QuestionCard|FinalAnswerCard|undefined=getCardByCardId(newCard.id)
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
    const finalAnswersArr:FinalAnswerCard[]=getButtomChilds(theCard as QuestionCard)
    const uniqueAddresses = Array.from(new Set(finalAnswersArr.map(a => a.id)))
        .map(id => {
        return finalAnswersArr.find(a => a.id === id)
        })

    return uniqueAddresses;

}
const getPopularFinalAnswers:CardModel.getMostPopularFinalAnswerOfCardQuestion=(id:CardModel.Card["id"])=>{

     const theCard = getCardByCardId(id)
     const mostCommonFinalAnswers:FinalAnswerCard[]=getButtomChilds(theCard as QuestionCard)
     mostCommonFinalAnswers.sort(function(a, b){return b.clicked-a.clicked});
     const mostPopularwithotDuplicate = Array.from(new Set(mostCommonFinalAnswers.map(a => a.id)))
     .map(id => {
     return mostCommonFinalAnswers.find(a => a.id === id)
     })

    return  mostPopularwithotDuplicate.slice(0,4)

}
const getInchargeSelectedCards:CardModel.getAllInchargeSelectedCards=()=>{
    const arrInChargeSelected:(QuestionCard|FinalAnswerCard)[] =cardData.filter((item)=>Boolean(item.ahmashSelected));
    return arrInChargeSelected;
}
const addNewQuestionCardAndConnect=()=>{



}
const addNewFaCardAndConnect=()=>{



}
export default {getFirstCard,getCardByCardId,updateCard,getInchargeSelectedCards,getPopularFinalAnswers,getAllFinalAnswersOfCard}