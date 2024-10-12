//Import dependencies
import express from 'express';
import { users } from '../data/users.mjs';

const router = express.Router();

//Get request for /users
router.get('/', (req, res) => {
    res.json(users)
  })
  
//Parameters
router.post('/:userId', (req, res) => {
    res.send(`Post user with userId: ${req.params.userId}`)
  })

router.get('/:userId', (req, res) => { 
    res.send(req.user);
  })
  
router.put('/:userId', (req, res) => {
    res.send(`Update user with userId: ${req.params.userId}`)
  })
  
router.delete('/:userId', (req, res) => {  
    res.send(`Delete user with userId: ${req.params.userId}`)
  })

//Middleware
router.param('userId', (req, res, next, id) => {  
    req.user = users[id - 1]
    //Error handling
    if (!req.user) {
        return res.status(404).send('User not found');
    }
    next();
  })

//Export default 
export default router;