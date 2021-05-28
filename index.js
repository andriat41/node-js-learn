//import express
import express from "express";

//init express
const app = express();

//basic route
app.get('/', (req, res)=>{
    res.send('Hello World!');
})

//listen port
app.listen(3000, () => {
    console.log('Listen http://localhost:3000');
})