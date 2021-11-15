import {QuestionCard} from './models'
import {FinalAnswerCard} from './models'

const c1 :QuestionCard ={id:1,cardTitle:"היכן הבעיה?",clicked:40,ahmashSelected:false,answers:[ "אתר","לא"]}
const c2 :QuestionCard ={id:2,cardTitle:"היכן הבעיה באתר?",clicked:900,ahmashSelected:false,answers:["שאלונים","נתון לא מעודכן באתר","נתון לא נכון באתר","לא מצליח להתחבר לאתר"]}
const c3 :QuestionCard ={id:3,cardTitle:"האם התחבר בעבר?",clicked:30,ahmashSelected:false,answers:[ "אתר","לא"]}
const c4 :QuestionCard ={id:4,cardTitle:"שילחו קישור לסיסמא ראשונית. הצליח?",clicked:32,ahmashSelected:false,answers:[ "אתר","לא"]}
const c5 :QuestionCard ={id:5,cardTitle:"האם קיים ב CRM?",clicked:10,ahmashSelected:true,answers:[ "אתר","לא"]}
const c8 :QuestionCard ={id:8,cardTitle:"האם קיים בSAP?",clicked:30,ahmashSelected:true,answers:[ "אתר","לא"]}
const c6 :FinalAnswerCard ={id:6,cardTitle:"היכנס לטרנזקציה",clicked:45,ahmashSelected:false,crmField:"תחום",crmSubField:"תת תחום",crmQuestion:"שאלה",crmSubQuestion:"תת שאלה"}
const c7 :FinalAnswerCard ={id:6,cardTitle:"שאלונים",clicked:45,ahmashSelected:false,crmField:"גיוס",crmSubField:"מתגייסים ברשת",crmQuestion:"תקלות באתר",crmSubQuestion:"תקלות באתר"}

const c9 :FinalAnswerCard ={id:9,cardTitle:"העבר פניה למדור תו''ם",clicked:45,ahmashSelected:false,crmField:"גיוס",crmSubField:"מתגייסים ברשת",crmQuestion:"לא מצליח להתחבר לאתר",crmSubQuestion:"לא מצליח להתחבר לאתר"}
const c10 :FinalAnswerCard ={id:10,cardTitle:"לעשות הסבה, להנחות להמתין לפחות 24 שעות ולהיכנס עם סיסמא ראשונית(סוג מידע 105)",clicked:45,ahmashSelected:false,crmField:"גיוס",crmSubField:"מתגיסים ברשת",crmQuestion:"לא מצליח להתחבר לאתר",crmSubQuestion:"לא מצליח להתחבר לאתר"}
const c11 :FinalAnswerCard ={id:11,cardTitle:"לבדוק ולעשות הסבה",clicked:4000,ahmashSelected:false,crmField:"גיוס",crmSubField:"מתגייסים ברשת ",crmQuestion:"חוסר/פער בנתונים",crmSubQuestion:"חוסר/פער בנתונים"}
const c12 :FinalAnswerCard ={id:12,cardTitle:"תודה רבה נגמר",clicked:500,ahmashSelected:false,crmField:"גיוס",crmSubField:"מתגייסים ברשת",crmQuestion:"לא מצליח להתחבר לאתר",crmSubQuestion:"לא מצליח להתחבר לאתר"}

const data : (QuestionCard | FinalAnswerCard)[] =[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]

export default data
// {
//     "data":[
//         {"id":1,"questionText":"היכן הבעיה?","answers":[ "אתר","לא"],"clicked":40,"InCargeSelcted":false},
//        {"id":2,"questionText":"היכן הבעיה באתר?","answers":["שאלונים","נתון לא מעודכן באתר","נתון לא נכון באתר","לא מצליח להתחבר לאתר"],"clicked":900,"InCargeSelcted":false},
//         {"id":3,"questionText":"האם התחבר בעבר?","answers":[ "לא","כן"] ,"clicked":30,"InCargeSelcted":false},
//         {"id":4,"questionText":"שילחו קישור לסיסמא ראשונית. הצליח?","answers":[ "לא","כן"],"clicked":32,"InCargeSelcted":false},
//         {"id":5,"questionText":"האם קיים בCRM?","answers":[ "לא","כן"], "clicked":10,"InCargeSelcted":true},
//        // {"id":6,"questionText":"היכנס לטרנזקציה","answers":["תחום","תת תחום","שאלה","תת שאלה","תבנית תשובה בCRM"],"clicked":45,"InCargeSelcted":true},
//         //{"id":7,"questionText":"שאלונים","answers":["גיוס","מתגייסים ברשת","תקלות באתר","תקלות באתר"],"clicked":10000,"InCargeSelcted":false},
//         {"id":8,"questionText":"האם קיים בSAP?","answers":[ "לא","כן"],"clicked":30,"InCargeSelcted":true},
//       //  {"id":9,"questionText":"העבר פניה למדור תו''ם","answers":[ "לא","כן"],"clicked":10000,"InCargeSelcted":false} ,   
//       //  {"id":10,"questionText":"לעשות הסבה, להנחות להמתין לפחות 24 שעות ולהיכנס עם סיסמא ראשונית(סוג מידע 105)","answers":["גיוס","מתגייסים ברשת","לא מצליח להתחבר לאתר","לא מצליח להתחבר לאתר"],"clicked":3000,"InCargeSelcted":false},
//       //  {"id":11,"questionText":"לבדוק ולעשות הסבה","answers":["גיוס","מתגייסים ברשת","חוסר/פער בנתונים","חוסר/פער בנתונים"],"clicked":4000,"InCargeSelcted":false},
//       //  {"id":12,"questionText":"תודה רבה נגמר","answers":["גיוס","מתגייסים ברשת","לא מצליח להתחבר לאתר","לא מצליח להתחבר לאתר"],"clicked":500,"InCargeSelcted":true}
//     ]
// }