//Import dependencies
import express from 'express';
import { classes } from '../data/classes.mjs';

const classRouter = express.Router();

//Get request for /reviews
classRouter.get('/', (req, res) => {
    res.json(classes)
  })

//Parameters
classRouter.get('/:userId', (req, res) => { 
    // console.log(req.params.userId)
    const user = classes.find(user => {
        console.log(user.userId)
       if(user.userId == req.params.userId){
            return true;
       }
    }) 
    // error handling
    if (req.params.userId < classes.length + 1){
      res.json(user); 
    } else {
      res.status(404).send('User not found');
    }
  })

//Export default 
export { classRouter } ;