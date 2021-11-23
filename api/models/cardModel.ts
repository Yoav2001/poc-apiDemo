import {FinalAnswerCard} from './finalAnswerModel'
import {QuestionCard} from './questionCardModel'
//   הנחה חשובה מספר הנקסטים בכרטיס שאלה צריך להיות שווה למספר התשובות 

//table cardTree
export type Card ={
    id: number;
    prevCard?: QuestionCard| FinalAnswerCard;
    cardTitle: string;
    clicked: number;
    ahmashSelected: boolean;
    
    // type: 'QuestionCard' | 'FinalAnswerCard'
}



 export type getTheFirstCard = () =>QuestionCard|FinalAnswerCard;
 export type getCardByCardId = (cardId:Card["id"]) => QuestionCard|FinalAnswerCard|undefined;
 export type addCard = (c: QuestionCard|FinalAnswerCard) => QuestionCard|FinalAnswerCard;
 export type updateCard = (c: Card) =>  QuestionCard|FinalAnswerCard|undefined;
 export type udpateFinalOrQuestionCard = (c: QuestionCard|FinalAnswerCard) => void

 export type getallFinalAnswerofCardQuestion = (cardQuestionid:Card["id"]) =>(FinalAnswerCard|undefined)[];
 export type getMostPopularFinalAnswerOfCardQuestion = (cardQuestionid:Card["id"]) =>(FinalAnswerCard|undefined)[];
 export type getAllInchargeSelectedCards = () =>(QuestionCard|FinalAnswerCard)[];
 export type getAllCardsByType = (type:FinalAnswerCard["type"]|QuestionCard["type"]) =>(QuestionCard|FinalAnswerCard)[];//field named type  in question card and final answers need to be same types string 
 export type addNewFinalAnswerAndAnswerToCardQuestion = (idQuestionCard:QuestionCard["id"],fa:FinalAnswerCard,answerRefToFa:string) =>string;
 export type addNewClickToCardCountWayOne = (idCurrentCardQuestion:Card["id"],indexNextCardSelected:number) =>void;//יקבל מזהה כרטיס ויוסיף לאובייקט במקום האינדקס במערך נקסט לחיצה נוספת
 export type addNewClickToCard = (idCard:Card["id"]) =>Card["clicked"]

 


// export type getAllCards = () => Promise<Card[]>;
// export type getCardByCardId = (cardId:Card["id"]) => Promise<Card | undefined>;
// export type addCard = (c: Card) =>  Promise<string>;
// export type udpateCard = (c: Card) => Promise<string>;
// export type DeleteCardByCardId = (cardId: Card["id"]) => Promise<string>;

//שלושה טבלאות
//    QuestionCard נסרוק את הטבלה הראשונה נחפש את המזהה של בטבלה של התשובות אם מצאנו ניצור את האובייקט     
//אם לא מצאנו את המזהה של הכרטסייה בטבלה של התשובות נחפש בטבלה של התשובות סופיות

