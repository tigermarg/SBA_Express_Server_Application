//Import dependencies
import express from 'express';
import { reviews } from '../data/reviews.mjs';
import error from '../utilities/error.mjs';


const reviewRouter = express.Router();

//Get request for /reviews
reviewRouter.get('/', (req, res) => {
    res.json(reviews);
})

//Post request for new review
reviewRouter.post('/', (req, res, next) => {
  if (req.body.name && req.body.rating && req.body.review) {
    let newReview = {
      id: reviews.length + 1,
      name: req.body.name,
      rating: req.body.rating,
      review: req.body.review,
    };
    // console.log(newReview)
    reviews.push(newReview);
    res.render("submitted", {
      title: "Submitted",
      header: "Thank You for Your Review!",
      name: newReview.name,
      rating: newReview.rating,
      review: newReview.review
  })

  } else {
    //Error handling
    next(error(400,'Insufficient Data'));
  }
})


//Parameters for review filtering
reviewRouter.get('/:id', (req, res, next) => { 
    // console.log(req.params.id)
    const user = reviews.find(user => {
        console.log(user.id)
       if(user.id == req.params.id){
            return true;
        } 
    }) 
      //Error handling
      if (user) res.json(user);
      else next(error(404,'Review not found'));
    })

reviewRouter.put('/:id', (req, res, next) => {
    const user = reviews.find((user, i) => {
      if (user.id == req.params.id) {
        for (const key in req.body) {
          reviews[i][key] = req.body[key];
        }
        return true;
      }
    });
    //Error handling
    if (user) res.json(user);
    else next(error(404,'Review not found'));
  })
  
reviewRouter.delete('/:id', (req, res, next) => {  
  const user = reviews.find((user, i) => {
      if (user.id == req.params.id) {
        reviews.splice(i, 1);
        return true;
      }
    });
    //Error handling
    if (user) res.json(user);
    else next(error(404,'Review not found'));
  })

//Export default 
export { reviewRouter } ;