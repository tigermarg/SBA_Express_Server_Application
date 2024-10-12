//Import dependencies
import express from 'express';
import userRouter from './routes/userRoutes.mjs';
import { reviewRouter } from './routes/reviewRoutes.mjs';
import { classRouter } from './routes/classRoutes.mjs';
import bodyParser from 'body-parser';

//Create an instance of express
const app = express();
let PORT = 3000;

//Server static file
app.use(express.static('./styles'));
app.use(express.static('./images'));

//Set view engine
app.set("view engine", "ejs");

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Routes
    //GET route for main view
app.get('/', (req, res) => {
    res.render("main", {
        title: "Home",
        header: "We want to hear from you!",
        message: "Tell us about your experience by rating your program and leaving a review."
    })
})

//Mount router to "/users" and pass router
app.use("/users", userRouter);
app.use("/reviews", reviewRouter);
app.use("/classes", classRouter);

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});