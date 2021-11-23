// import {FinalAnswerCard} from './models/finalAnswerModel'
// import {QuestionCard} from './models/qcModel'
import type CardModel = require("./models/cardModel");
import type qcModel = require("./models/questionCardModel");
import type faModel = require("./models/finalAnswerModel");
import express from 'express'
import db from './dataPoc.json'
const cardData = db.data as (qcModel.QuestionCard | faModel.FinalAnswerCard)[];

const startClickedForNewCard :number=0;
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

// const addNewClickToCardWayOne:CardModel.addNewClickToCardCountWayOne=(idCard:CardModel.Card["id"],indexNextCardToAdd)=>{

//         const currentCardQuestion:qcModel.QuestionCard|faModel.FinalAnswerCard|undefined=getCardByCardId(idCard)
//         if( currentCardQuestion?.type==="QuestionCard"){
//             if(currentCardQuestion.nextCards!==undefined){
//                 currentCardQuestion.nextCards[indexNextCardToAdd].clicked++
//             }
//             else{
//                 throw new Error("there is no next card to this question to add click");

//             }


//            }else{
                 
//             throw new Error("Error you need to give id of cardQuestion ");

//            }
// }

const addNewClickToCard:CardModel.addNewClickToCard=(idCard:CardModel.Card["id"])=>{

        const currentCard:qcModel.QuestionCard|faModel.FinalAnswerCard|undefined=getCardByCardId(idCard)
        if(currentCard===undefined)
         throw new Error("Error cant find card (question/final answer) with the id tou give ");
        else{
            currentCard.clicked++;
            return currentCard.clicked;
            
        }
}

const addNewFinalAnswerCardAndConnect:CardModel.addNewFinalAnswerAndAnswerToCardQuestion=(idQuestionCard:CardModel.Card["id"],fa:faModel.FinalAnswerCard,answerRefToFinalAnswer:string)=>{
    console.log("here logics");

    const cardQuestion:qcModel.QuestionCard|faModel.FinalAnswerCard|undefined=getCardByCardId(idQuestionCard)
    if(cardQuestion?.type==="QuestionCard"){
         cardQuestion.answers.push(answerRefToFinalAnswer)
         fa.clicked=startClickedForNewCard;
        cardQuestion.nextCards?.push(fa) 
           return "add the final answer succuess"

        }else{
            throw new Error("Error you need to give id of cardQuestion ");

        }
}

const addNewQuestionCardAndConnect=()=>{



}


const updateFinalAnswerOrQuestionCard:CardModel.udpateFinalOrQuestionCard=(updateCard:faModel.FinalAnswerCard|qcModel.QuestionCard)=>{
    const currentCard:qcModel.QuestionCard|faModel.FinalAnswerCard|undefined=getCardByCardId(updateCard.id)
    if(currentCard===undefined){
        throw new Error("Error cant find card (question/final answer) with the id tou give ");

    }

    if(currentCard.type!==updateCard.type)
        throw new Error("you give a card with diffrent type to update ");

    switch(currentCard.type){

        case "QuestionCard":
            updateQuestionCard(currentCard,updateCard as qcModel.QuestionCard)
            break;

        case "FinalAnswerCard":
            updateFinalAnswer(currentCard,updateCard as faModel.FinalAnswerCard)

        break;
        default:
            throw new Error("there was problem with update ");
            
    }

    

}
const updateFinalAnswer:faModel.updateFinalAnswer =(currentCard:faModel.FinalAnswerCard,updateFaCard:faModel.FinalAnswerCard)=>{
    currentCard.ahmashSelected=updateFaCard.ahmashSelected;
    currentCard.cardTitle=updateFaCard.cardTitle;
    currentCard.crmField=updateFaCard.crmField;
    currentCard.crmSubField=updateFaCard.crmSubField;
    currentCard.crmQuestion=updateFaCard.crmQuestion;
    currentCard.crmSubQuestion=updateFaCard.crmSubQuestion;

}

const updateQuestionCard:qcModel.updateQuestionCard =(currentCard: qcModel.QuestionCard, updateQuestionCard: qcModel.QuestionCard)=>{

    currentCard.ahmashSelected=updateQuestionCard.ahmashSelected;
    currentCard.cardTitle=updateQuestionCard.cardTitle;
    
    currentCard.answers=updateQuestionCard.answers;
    // currentCard.answers.map((answer ,index)=>answer===updateQuestionCard.answers[index])

}
export default {getFirstCard,getCardByCardId,updateCard,getInchargeSelectedCards,getPopularFinalAnswers,getAllFinalAnswersOfCard,getAllquestionOrFinalanswers,addNewClickToCard,addNewFinalAnswerCardAndConnect,updateFinalAnswerOrQuestionCard}