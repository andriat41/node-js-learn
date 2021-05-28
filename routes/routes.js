import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome Home Page!');
})

router.get('/about', (req, res) => {
    res.send('Welcome to about page!');
})

router.get('/contact', (req, res) => {
    res.send('Welcome to contact page!');
})


export default router;