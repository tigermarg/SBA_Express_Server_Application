//Import dependencies
import express from 'express';
import userRouter from './routes/userRoutes.mjs';

//Create an instance of express
const app = express();
let PORT = 3000;

//Middleware

//Routes
app.route('/').get((req, res) => {
    res.send(`get`)
}).post((req, res) => {
    res.send(`post`)
}).patch((req, res) => {
    res.send(`patch`)
}).delete((req, res) => {
    res.send(`delete`)
})

//Mount router to "/users" and pass router
app.use("/users", userRouter)

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})