//Import dependencies
import express from 'express';
import userRouter from './routes/userRoutes.mjs';
import { reviewRouter } from './routes/reviewRoutes.mjs'
import { classRouter } from './routes/classRoutes.mjs'

//Create an instance of express
const app = express();
let PORT = 3000;

//Server static file
app.use(express.static('./styles'));

//Set view engine
app.set("view engine", "ejs");

//Middleware

//Routes
app.route('/').get((req, res) => {
    res.render("template", {
        title: "Reviews",
        message: "We want to hear from you!"
    })
}).post((req, res) => {
    res.send(`post`)
}).patch((req, res) => {
    res.send(`patch`)
}).delete((req, res) => {
    res.send(`delete`)
});

//Mount router to "/users" and pass router
app.use("/users", userRouter);
app.use("/reviews", reviewRouter);
app.use("/classes", classRouter);

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});