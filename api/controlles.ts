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

// const getButtomChilds=(card:QuestionCard)=>{
//     const arrFinalAnswers :FinalAnswerCard[]=new Array();

//     getButtomChildsRekorsiv(card,arrFinalAnswers)
//     return arrFinalAnswers;
// }
// const getButtomChildsRekorsiv=(c:QuestionCard|FinalAnswerCard,arr:FinalAnswerCard[])=>{
 
//     if(c.nextCards===null||c.type==="FinalAnswerCard"){
//         arr.push(c) 
//         return
//     }
//      c.nextCards?.map(c => getButtomChildsRekorsiv(c,arr))

// }


export default  {
    getTheFirstCard : (req:express.Request,res:express.Response)=>{
        // res.json(cardData[0])
        console.log("dsfds");
        
        res.json(cardLogic.getFirstCard());
    },
    // getCardByCardId: (req:express.Request,res:express.Response)=>{
    //     const id:number = req.params.CardId;
    //     // const theCard = cardData.find((item)=>item.id === parseInt(id))
    //     res.json(cardLogic.getCardByCardId(id))
    // },
    getallFinalAnswersOfCardQuestion :(req:express.Request,res:express.Response)=>{
        // const id = req.params.CardId;
        // const cardQuestion = cardData.find((item)=>item.id === parseInt(id))

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
    // getMostPopularFinalAnswer:(req:express.Request,res:express.Response)=>{
    //     const id = req.params.CardId;

    //     // const theCard = cardData.find((item)=>item.id === parseInt(id))
    //     // const mostCommonFinalAnswers:FinalAnswerCard[]=getButtomChilds(theCard as QuestionCard)
    //     // mostCommonFinalAnswers.sort(function(a, b){return b.clicked-a.clicked});
    //     // res.json(mostCommonFinalAnswers.slice(0,4))

    //     const arrPopularFinalAnswer=cardLogic.getPopularFinalAnswers(id)
    //     res.json(arrPopularFinalAnswer)


    // },
    getInchargeSelected:(req:express.Request,res:express.Response)=>{
    //    let newArr;
    //     newArr = cardData.filter((item)=>Boolean(item.ahmashSelected));
    //     res.json(newArr);
    const cardInchargeSelected= cardLogic.getInchargeSelectedCards();
    res.json(cardInchargeSelected);
    }
    // ,
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
            
    //  }
}



//  , getMostClickedInTheTree:(req:express.Request,res:express.Response)=>{
//         let MostClicked:FinalAnswerCard[] =[];

//         const id = req.params.CardId;
//         CardData.map((item)=>{
//             if(item.id === Number(id)){
//                 GetMostClicked(MostClicked,item);
//                 MostClicked.sort((a,b)=>Number(b.clicked) - Number(a.clicked));
//                 let Answer = [];
//                 MostClicked.map((item )=>{
//                     if(item.nextCards === undefined){
//                         Answer.push(item)
//                     }
//                 })
//                 Answer.splice(4,MostClicked.length)
//                 res.json(Answer);
//             }
//         })
//     }

    // ,
//     // getInchargeSelected:(req:express.Request,res:express.Response)=>{
//     //     let newArr;
//     //     newArr = CardData.filter((item)=>Boolean(item.ahmashSelected) === true);
//     //     res.json(newArr);
//     // },
//     // getAnswerArray:(req:express.Request,res:express.Response)=>{
//     //     let Answer = [];
//     //     CardData.map((item)=>{
//     //         if((item  as QuestionCard).nextCards === undefined){
//     //             Answer.push(item)
//     //         }
//     //     })
//     //     res.json(Answer);
//     // },
//     // getDataArray:(req:express.Request,res:express.Response)=>{
//     //     res.json(CardData)
    // },
    // updateCard:(req:express.Request,res:express.Response)=>{
    //     const idcardQuestion:number = req.body.idcardQuestion;
    //     const updateQuestion:string=req.body.updateQuestion;
    //     const cardQuestion :(QuestionCard|FinalAnswerCard )[]=  (CardData.filter(card => card.id===idcardQuestion) )
    //     cardQuestion[0].cardTitle=updateQuestion;
    // }
// };


// const getAllChildOfCard =  (result: FinalAnswerCard[], card:QuestionCard | FinalAnswerCard)=>{
//     if(card.type === 'FinalAnswerCard'){
//         //sorting
//         return result;
//     }
//     else{
//         if(card.nextCards !== undefined){
//             if((card as QuestionCard) !== undefined){
//                 for (let index = 0; index < (card as QuestionCard).nextCards!.length; index++) {
//                     if(result.indexOf((card as QuestionCard).nextCards[index]) === -1){
//                         result.push(card.nextCards[index]);
//                     }
                    
//                 }
//                 for (let index = 0; index < card.nextCards.length; index++) {
//                     GetMostClicked(result,card.nextCards[index]);      
//                 }
//             }

//         }

//     }
// }
