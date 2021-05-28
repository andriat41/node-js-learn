//import express
import express from "express";

//import router
import router from './routes/routes.js';

//init express
const app = express();

//user router
app.use(router);

//listen port
app.listen(3000, () => {
    console.log('Listen http://localhost:3000');
})