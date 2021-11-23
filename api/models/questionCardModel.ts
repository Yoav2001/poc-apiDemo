import {Card} from '../models/cardModel'
import {FinalAnswerCard} from '../models/finalAnswerModel'

export type QuestionCard =  Card &{
    type: 'QuestionCard' 
    answers: string[];//change from answer[] there was type of answer
    indexSelectedAnswer?: number;
    nextCards?: (QuestionCard | FinalAnswerCard)[];
 }
 export type getQuestionCardByCardId = (questionCardId:QuestionCard["id"]) => QuestionCard | undefined;
 export type getAllQuestionCard = () => QuestionCard[] | undefined;
 export type updateQuestionCard = (currentCard:QuestionCard,updateQestionCard:QuestionCard) => void;


 //answer table
// export type Answer = {
//     id?: number
//     text: string,
//     currentQuestionCard:QuestionCard
//     nextId:number
// }