//table cardTree
export type Card ={
    id: number;
    prevCard?: QuestionCard| FinalAnswerCard;
    cardTitle: string;
    clicked: number;
    ahmashSelected: boolean;
}
//answer table
// export type Answer = {
//     id?: number
//     text: string,
//     currentQuestionCard:QuestionCard
//     nextId:number
// }
export type QuestionCard =  Card &{ 
   answers: string[];//change from answer[]
   indexSelectedAnswer?: number;
   nextCards?: (QuestionCard | FinalAnswerCard)[];
}
//finalAnswerTable
export type FinalAnswerCard  =  Card & { 
    // idFinalAnswerCard:number,
    crmField:string,
    crmSubField:string,
    crmQuestion :string,
    crmSubQuestion:string,
}

//שלושה טבלאות
//    QuestionCard נסרוק את הטבלה הראשונה נחפש את המזהה של בטבלה של התשובות אם מצאנו ניצור את האובייקט     
//אם לא מצאנו את המזהה של הכרטסייה בטבלה של התשובות נחפש בטבלה של התשובות סופיות