import express from 'express';
import {Home, Contact, About} from '../controller/index.js';

const router = express.Router();

router.get('/', Home)

router.get('/about', Contact)

router.get('/contact', About)


export default router;