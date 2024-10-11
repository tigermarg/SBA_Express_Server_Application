//Import dependencies
import express from 'express';
import { classes } from '../data/classes.mjs';

const classRouter = express.Router();

//Get request for /reviews
classRouter.get('/', (req, res) => {
    res.json(classes)
  })
  

//Export default 
export { classRouter } ;