//Import dependencies
import express from 'express';
import { users } from '../data/users.mjs';
import error from '../utilities/error.mjs';

const router = express.Router();

//Get request for /users
router.get('/', (req, res) => {
    res.json(users)
  })
  
//Parameters
router.get('/:userId', (req, res) => { 
    res.send(req.user);
  })

//Middleware
router.param('userId', (req, res, next, id) => {  
    req.user = users[id - 1]
    //Error handling
    if (!req.user) {
       return next(error(404,'User not found'));
    }
    next()
  })

//Export default 
export default router;