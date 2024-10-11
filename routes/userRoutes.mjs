//Import dependencies
import express from 'express';
import { users } from '../data/users.mjs';
// console.log(users)

const router = express.Router();

//Get request for /users
router.get('/', (req, res) => {
    res.json(users)
  })
  
//Query parameters
router.post('/:userId', (req, res) => {
    res.send(`Post user with userId: ${req.params.userId}`)
  })

router.get('/:userId', (req, res) => { 
    console.log(req.user)
    res.send(req.user)
  })
  
router.patch('/:userId', (req, res) => {
    res.send(`Update user with userId: ${req.params.userId}`)
  })
  
router.delete('/:userId', (req, res) => {  
    res.send(`Delete user with userId: ${req.params.userId}`)
  })

//Middleware
router.param("userId", (req, res, next, userId) => {  
    req.user = users[userId]
    next();
  })

//Export default 
export default router;