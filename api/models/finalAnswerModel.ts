
import {Card} from '../models/cardModel'

//finalAnswerTable
export type FinalAnswerCard  =  Card & { 
    type: 'FinalAnswerCard'
    // idFinalAnswerCard:number,
    crmField:string,
    crmSubField:string,
    crmQuestion :string,
    crmSubQuestion:string,
    nextCards?:null
}

export type getFianlCardByCardId = (FinalCardId:FinalAnswerCard["id"]) => Promise<FinalAnswerCard | undefined>;
export type getallFinalAnswersCard = () => FinalAnswerCard[] | undefined;
export type updateFinalAnswer = (currentCard:FinalAnswerCard,updateFaCard:FinalAnswerCard) => void;
