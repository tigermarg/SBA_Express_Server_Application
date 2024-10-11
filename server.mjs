//Import dependencies
import express from 'express';

//Create an instance of express
const app = express();
let PORT = 3000;

//Middleware

//Routes
app.get('/', (req, res) => {
    res.send(`get`)
})

app.post('/', (req, res) => {
    res.send(`post`)
})

app.patch('/', (req, res) => {
    res.send(`patch`)
})

app.delete('/', (req, res) => {
    res.send(`delete`)
})


//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})