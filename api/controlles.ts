
import {FinalAnswerCard} from './models/finalAnswerModel'
import {QuestionCard} from './models/questionCardModel'
import {Card} from './models/cardModel'
import express from 'express'
import db from './dataPoc.json'

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

const getButtomChilds=(card:QuestionCard)=>{
    const arrFinalAnswers :FinalAnswerCard[]=new Array();

    getButtomChildsRekorsiv(card,arrFinalAnswers)
    return arrFinalAnswers;
}
const getButtomChildsRekorsiv=(c:QuestionCard|FinalAnswerCard,arr:FinalAnswerCard[])=>{
    console.log("a");
    console.log(c);

    if(c.nextCards===null||c.type==="FinalAnswerCard"){
        console.log("stop!");
        
        arr.push(c) 
        console.log(c);
    
        return
    }
     c.nextCards?.map(c => getButtomChildsRekorsiv(c,arr))

}


export default  {
    AllData : (req:express.Request,res:express.Response)=>{
        res.json(cardData[0]);
    },
    getTheCard: (req:express.Request,res:express.Response)=>{
        const id = req.params.CardId;
        const theCard = cardData.find((item)=>item.id === parseInt(id))
        res.json(theCard)
    },
    getallFinalAnswersOfCardQuestion :(req:express.Request,res:express.Response)=>{
        const id = req.params.CardId;
        const cardQuestion = cardData.find((item)=>item.id === parseInt(id))

    },
    updateCard:(req:express.Request,res:express.Response)=>{
        console.log("dsfsdf");
        console.log(req.body);
      
        const updateTitle:string=req.body.updateTitle;
        const idcardTitle:number =<number> req.body.idCardTitle;
        const cardQuestion :(QuestionCard|FinalAnswerCard)[]=  (cardData.filter(card => card.id===idcardTitle) )
        cardQuestion[0].cardTitle=updateTitle;
        res.json( cardQuestion[0])


    },
    getMostPopularFinalAnswer:(req:express.Request,res:express.Response)=>{
        const id = req.params.CardId;
        const theCard = cardData.find((item)=>item.id === parseInt(id))
        // console.log(theCard);
        
        // if(theCard?.nextCards===null)
        //     return
        const mostCommonFinalAnswers:FinalAnswerCard[]=getButtomChilds(theCard as QuestionCard)
        mostCommonFinalAnswers.sort(function(a, b){return b.clicked-a.clicked});

        // mostCommonFinalAnswers.sort((a,b)=>(b.clicked) - Number(a.clicked));
        res.json(mostCommonFinalAnswers.slice(0,4))


    },
    getInchargeSelected:(req:express.Request,res:express.Response)=>{
       let newArr;
         newArr = cardData.filter((item)=>Boolean(item.ahmashSelected));
        res.json(newArr);
    }
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
