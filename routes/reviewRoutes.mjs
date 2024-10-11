//Import dependencies
import express from 'express';
import { reviews } from '../data/reviews.mjs';

const reviewRouter = express.Router();

//Get request for /reviews
reviewRouter.get('/', (req, res) => {
    res.json(reviews)
  })
  

//Export default 
export { reviewRouter } ;