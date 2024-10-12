//Import dependencies
import express from 'express';
import { classes } from '../data/classes.mjs';
import error from '../utilities/error.mjs';

const classRouter = express.Router();

//GET route for /classes
classRouter.get('/', (req, res) => {
    res.json(classes)
  })

//Parameters for user filtering using GET route
classRouter.get('/:userId', (req, res, next) => { 
    // console.log(req.params.userId)
    const user = classes.find(user => {
        // console.log(user.userId)
       if(user.userId == req.params.userId){
            return true;
       }
    }) 
    //Error handling
    if (user) res.json(user);
    else next(error(404,'User not found'));
  })

//Export default 
export { classRouter } ;