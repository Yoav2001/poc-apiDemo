
//table cardTree
export type Card ={
    id: number;
    prevCard?: QuestionCard| FinalAnswerCard;
    cardTitle: string;
    clicked: number;
    ahmashSelected: boolean;
    
    // type: 'QuestionCard' | 'FinalAnswerCard'
}

export type FinalAnswerCard  =  Card & { 
    type: 'FinalAnswerCard'
    // idFinalAnswerCard:number,
    crmField:string,
    crmSubField:string,
    crmQuestion :string,
    crmSubQuestion:string,
    nextCards?:null
}
export type QuestionCard =  Card &{
    type: 'QuestionCard' 
    answers: string[];//change from answer[] there was type of answer
    indexSelectedAnswer?: number;
    nextCards?: (QuestionCard | FinalAnswerCard)[];
 }

 export type getTheFirstCard = () =>QuestionCard|FinalAnswerCard;
 export type getCardByCardId = (cardId:Card["id"]) => QuestionCard|FinalAnswerCard;
 export type addCard = (c: QuestionCard|FinalAnswerCard) => QuestionCard|FinalAnswerCard;
 export type udpateCard = (c: Card) =>  QuestionCard|FinalAnswerCard
 export type getMostPopularFinalAnswer = (cardId:Card["id"]) =>(FinalAnswerCard|undefined)[];
 export type getAllInchargeSelectedCards = () =>(QuestionCard|FinalAnswerCard)[];

 


// export type getAllCards = () => Promise<Card[]>;
// export type getCardByCardId = (cardId:Card["id"]) => Promise<Card | undefined>;
// export type addCard = (c: Card) =>  Promise<string>;
// export type udpateCard = (c: Card) => Promise<string>;
// export type DeleteCardByCardId = (cardId: Card["id"]) => Promise<string>;

//שלושה טבלאות
//    QuestionCard נסרוק את הטבלה הראשונה נחפש את המזהה של בטבלה של התשובות אם מצאנו ניצור את האובייקט     
//אם לא מצאנו את המזהה של הכרטסייה בטבלה של התשובות נחפש בטבלה של התשובות סופיות

