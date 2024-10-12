//Import dependencies
import express from 'express';
import { reviews } from '../data/reviews.mjs';

const reviewRouter = express.Router();

//Get request for /reviews
reviewRouter.get('/', (req, res) => {
    res.json(reviews);
})

//Post request for new review
reviewRouter.post('/', (req, res) => {
  if (req.body.name && req.body.rating && req.body.review) {
    let newReview = {
      id: reviews.length + 1,
      name: req.body.name,
      rating: req.body.rating,
      review: req.body.review,
    };
    // console.log(newReview)
    reviews.push(newReview);
    res.send(newReview)

  } else {
    res.status(400).send('Insufficient Data');
  }
})


//Parameters
reviewRouter.get('/:id', (req, res) => { 
    // console.log(req.params.id)
    const user = reviews.find(user => {
        console.log(user.id)
       if(user.id == req.params.id){
            return true;
        } 
    }) 
    // error handling
      if (user) res.json(user);
      else res.status(404).send('Review not found');
    })

reviewRouter.put('/:id', (req, res) => {
    const user = reviews.find((user, i) => {
      if (user.id == req.params.id) {
        for (const key in req.body) {
          reviews[i][key] = req.body[key];
        }
        return true;
      }
    });
    //error handling
    if (user) res.json(user);
    else res.status(404).send('Review not found');
  })
  
reviewRouter.delete('/:id', (req, res) => {  
  const user = reviews.find((user, i) => {
      if (user.id == req.params.id) {
        reviews.splice(i, 1);
        return true;
      }
    });
    //error handling
    if (user) res.json(user);
    else res.status(404).send('Review not found');
  })

//Export default 
export { reviewRouter } ;