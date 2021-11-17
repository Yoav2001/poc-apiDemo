import {FinalAnswerCard} from '../models/finalAnswerModel'
import {QuestionCard} from '../models/questionCardModel'

//table cardTree
export type Card ={
    id: number;
    prevCard?: QuestionCard| FinalAnswerCard;
    cardTitle: string;
    clicked: number;
    ahmashSelected: boolean;
    
    // type: 'QuestionCard' | 'FinalAnswerCard'
}

export type getAllCards = () => Promise<Card[]>;
export type getCardByCardId = (cardId:Card["id"]) => Promise<Card | undefined>;
export type addCard = (c: Card) =>  Promise<string>;
export type udpateCard = (c: Card) => Promise<string>;
export type DeleteCardByCardId = (cardId: Card["id"]) => Promise<string>;

//שלושה טבלאות
//    QuestionCard נסרוק את הטבלה הראשונה נחפש את המזהה של בטבלה של התשובות אם מצאנו ניצור את האובייקט     
//אם לא מצאנו את המזהה של הכרטסייה בטבלה של התשובות נחפש בטבלה של התשובות סופיות

