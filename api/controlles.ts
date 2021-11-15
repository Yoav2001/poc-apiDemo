
const db = require("../../db/db.json")
import {QuestionCard} from './models'
import {FinalAnswerCard} from './models'
import {Card} from './models'

import express from 'express'
// let CardData = db.data;
import CardData from './data'


const addNexts = ()=>{
    (CardData[0] as QuestionCard).nextCards = ([CardData[1],CardData[5]]);
    (CardData[1]  as QuestionCard) .nextCards = ([CardData[6],CardData[10],CardData[10],CardData[2]]);
    (CardData[2]  as QuestionCard) .nextCards = ([CardData[3],CardData[4]]);
    (CardData[3]  as QuestionCard) .nextCards= ([CardData[4],CardData[11]]);
    (CardData[4]  as QuestionCard) .nextCards = ([CardData[7],CardData[11]]);
    (CardData[7]  as QuestionCard) .nextCards= ([CardData[8],CardData[9]])

}
//arr is where you put the most Clicked
//card is The the one
const GetMostClicked = (arr,card)=>{
    if(card.nextCards === undefined){
        return arr;
    }else{
        for (let index = 0; index < card.nextCards.length; index++) {
            if(arr.indexOf(card.nextCards[index]) === -1){
                arr.push(card.nextCards[index]);
            }
            
        }
        for (let index = 0; index < card.nextCards.length; index++) {
            GetMostClicked(arr,card.nextCards[index]);      
        }
    }
}

addNexts();

export default  {
    AllData : (req:express.Request,res:express.Response)=>{
        res.json(CardData[0]);
    },
    getTheCard: (req,res)=>{
        const id = req.params.CardId;
        const theCard = CardData.find((item)=>item.id === parseInt(id))
        res.json(theCard)
    },
    getMostClickedInTheTree:(req:express.Request,res:express.Response)=>{
        let MostClicked =[];

        const id = req.params.CardId;
        CardData.map((item)=>{
            if(item.id === Number(id)){
                GetMostClicked(MostClicked,item);
                MostClicked.sort((a,b)=>Number(b.clicked) - Number(a.clicked));
                let Answer = [];
                MostClicked.map((item)=>{
                    if(item.nextCards === undefined){
                        Answer.push(item)
                    }
                })
                Answer.splice(4,MostClicked.length)
                res.json(Answer);
            }
        })
    },
    getInchargeSelected:(req:express.Request,res:express.Response)=>{
        let newArr;
        newArr = CardData.filter((item)=>Boolean(item.ahmashSelected) === true);
        res.json(newArr);
    },
    getAnswerArray:(req:express.Request,res:express.Response)=>{
        let Answer = [];
        CardData.map((item)=>{
            if((item  as QuestionCard).nextCards === undefined){
                Answer.push(item)
            }
        })
        res.json(Answer);
    },
    getDataArray:(req:express.Request,res:express.Response)=>{
        res.json(CardData)
    },
    updateCard:(req:express.Request,res:express.Response)=>{
        const idcardQuestion:number = req.body.idcardQuestion;
        const updateQuestion:string=req.body.updateQuestion;
        const cardQuestion :(QuestionCard|FinalAnswerCard )[]=  (CardData.filter(card => card.id===idcardQuestion) )
        cardQuestion[0].cardTitle=updateQuestion;
    }
};