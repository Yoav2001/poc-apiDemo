import express from 'express'
const app = express();
import cors from 'cors'
import mainRouter from './routes/mainRouter'
import bodyParser from 'body-parser'
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.use((req, res, next)=>{
    res.header("Access-Control-Origin", "*");
    res.header("Access-Control-Headers", "origin, X-Requested-Width, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Headers", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
//routes
app.use("/api",mainRouter);


// app.use((req,res,next)=>{ 
//     const error = new Error("Not Found");
//     error.status = 404;
//     next(error);
// });

// app.use((error,req,res,next)=>{
//     res.status(error.status || 500).json({error: {
//         "message" : error.message
//     }});
// });
const port :number =8000;
app.listen(port);
console.log(`app listen on port ${port}`);
