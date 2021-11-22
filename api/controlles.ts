import {FinalAnswerCard} from './models/finalAnswerModel'
import {QuestionCard} from './models/questionCardModel'
import {Card} from './models/cardModel'
import express from 'express'
import db from './dataPoc.json'
import cardLogic from './cardLogic'
const cardData = db.data as (QuestionCard | FinalAnswerCard)[];

// const cardData:(QuestionCard |FinalAnswerCard)[]=allCards.filter(c=>c.type="QuestionCard").concat(allCards.filter(c=>c.type="FinalAnswerCard"))
const addNexts = ( cardData:(QuestionCard|FinalAnswerCard)[])=>{

    (cardData[0] as QuestionCard).nextCards = ([cardData[1],cardData[5]]);
    (cardData[1]  as QuestionCard) .nextCards = ([cardData[6],cardData[10],cardData[10],cardData[2]]);
    (cardData[2]  as QuestionCard) .nextCards = ([cardData[3],cardData[4]]);
    (cardData[3]  as QuestionCard) .nextCards= ([cardData[4],cardData[11]]);
    (cardData[4]  as QuestionCard) .nextCards = ([cardData[7],cardData[11]]);
    (cardData[7]  as QuestionCard) .nextCards= ([cardData[8],cardData[9]])

    //cehckNextPoplarFunction
    // (CardData[0] as QuestionCard).nextCards = ([CardData[1],CardData[6],CardData[4]]);
    // (CardData[1] as QuestionCard).nextCards = ([CardData[9],CardData[10]]);
}
addNexts(cardData);




export default  {
    getTheFirstCard : (req:express.Request,res:express.Response)=>{
        // res.json(cardData[0])
        console.log("dsfds");
        
        res.json(cardLogic.getFirstCard());
    },
    getCardByCardId: (req:express.Request,res:express.Response)=>{
        const id:string = req.params.cardId;
        // const theCard = cardData.find((item)=>item.id === parseInt(id))
        res.json(cardLogic.getCardByCardId(parseInt(id)))
    },
    getallFinalAnswersOfCardQuestion :(req:express.Request,res:express.Response)=>{
        const id = req.params.cardId;
        const arrfinalAnswers=cardLogic.getAllFinalAnswersOfCard(parseInt(id))
        res.json(arrfinalAnswers)

    },
    updateCard:(req:express.Request,res:express.Response)=>{
        // const updateTitle:string=req.body.updateTitle;
        // const numberClicked:string=req.body.click;
        // const ahmashSelected:string=req.body.ahmashSelected;
        // const idcardTitle:number =<number> req.body.idCardTitle;
        // res.json( cardQuestion[0])
        const { idcardTitle, updateTitle,numberClicked, ahmashSelected } : {idcardTitle : number, updateTitle : string, numberClicked : number,ahmashSelected:boolean} = req.body;
        const c:Card={id:idcardTitle,cardTitle:updateTitle,clicked:numberClicked,ahmashSelected:ahmashSelected}
        const newCard:QuestionCard|FinalAnswerCard|undefined=cardLogic.updateCard(c)
        res.json(newCard);

    },
    getMostPopularFinalAnswer:(req:express.Request,res:express.Response)=>{
        const id = req.params.cardId;

        // const theCard = cardData.find((item)=>item.id === parseInt(id))
        // const mostCommonFinalAnswers:FinalAnswerCard[]=getButtomChilds(theCard as QuestionCard)
        // mostCommonFinalAnswers.sort(function(a, b){return b.clicked-a.clicked});
        // res.json(mostCommonFinalAnswers.slice(0,4))

        const arrPopularFinalAnswer=cardLogic.getPopularFinalAnswers(parseInt(id))
        res.json(arrPopularFinalAnswer)


    },
    getInchargeSelected:(req:express.Request,res:express.Response)=>{
    const cardInchargeSelected= cardLogic.getInchargeSelectedCards();
    res.json(cardInchargeSelected);
    },
    getCountInchargeSelected:(req:express.Request,res:express.Response)=>{
        const cardInchargeSelected= cardLogic.getInchargeSelectedCards();
        res.json(cardInchargeSelected.length);
    },
    getAllCardQuestion:(req:express.Request,res:express.Response)=>{
        res.json(cardLogic.getAllquestionOrFinalanswers("QuestionCard"));
    },
    getAllFinalAnswers:(req:express.Request,res:express.Response)=>{
        res.json(cardLogic.getAllquestionOrFinalanswers("FinalAnswerCard"));
    },
    addNewClickToCard:(req:express.Request,res:express.Response)=>{
        const {idCurrentCardQuestion,indexNextCardSelected}:{ idCurrentCardQuestion : number , indexNextCardSelected : string}=req.body;

        cardLogic.addNewClickToCard()
    },
    addNewFinalAnswerCard:(req:express.Request,res:express.Response)=>{
        const { cardTitle, ahmashSelected ,crmField, crmSubField, crmQuestion,crmSubQuestion} : { cardTitle : string, ahmashSelected : boolean,crmField : string, crmSubField : string, crmQuestion : string,crmSubQuestion:string} = req.body;
        const idForNewFaCard :number =cardData[cardData.length].id++;
        const c:Card={id:idForNewFaCard,cardTitle:cardTitle,clicked:0,ahmashSelected:ahmashSelected};
        const fa:FinalAnswerCard={...c,type:"FinalAnswerCard",crmField:crmField,crmSubField:crmSubField, crmQuestion :crmQuestion, crmSubQuestion:crmSubQuestion}
        const {cardQuestionIdRefToFinalAnswer,answerRefToFinalAnswer}:{ cardQuestionIdRefToFinalAnswer : number , answerRefToFinalAnswer : string}=req.body;
        try{
             cardLogic.addNewFinalAnswerCardAndConnect(fa,cardQuestionIdRefToFinalAnswer,answerRefToFinalAnswer);

        }
        catch{
            res.json("there was a problem with inseret data")

        }
            
      }

    
    // addNewCard:(req:express.Request,res:express.Response)=>{
       
    //     const { typeCard, cardTitle, ahmashSelected } : {typeCard : string, cardTitle : string, ahmashSelected : boolean} = req.body;
    //     const id :number =cardData[cardData.length].id++;
    //     const prevCard:QuestionCard|FinalAnswerCard=cardData[req.body.prevCardId]
    //     const c:Card={id:id,prevCard:prevCard,cardTitle:cardTitle,clicked:0,ahmashSelected:ahmashSelected};

    //     if(typeCard==="QuestionCard"){
    //         const answers:string[]=req.body.answersQuestionCard;
    //         const q:QuestionCard={...c,type:typeCard,answers:answers }
    //         cardData.addNewQuestionCardAndConnect(q);
    //         res.json(q)
    //     }
    //     else if(typeCard==="FinalAnswerCard"){
    //     const { crmField, crmSubField, crmQuestion,crmSubQuestion } : {crmField : string, crmSubField : string, crmQuestion : string,crmSubQuestion:string} = req.body;
    //         const fa:FinalAnswerCard={...c,type:typeCard,crmField:crmField,crmSubField:crmSubField, crmQuestion :crmQuestion, crmSubQuestion:crmSubQuestion}
    //         cardData.addNewFaCardAndConnect(fa,cardData);
    //         res.json(fa)
    //     }
    //     res.json("there was a problem with inseret data")
        // }



}