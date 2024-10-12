//Import dependencies
import express from 'express';
import { reviews } from '../data/reviews.mjs';
import error from '../utilities/error.mjs';


const reviewRouter = express.Router();

//GET route for /reviews
reviewRouter.get('/', (req, res) => {
    res.json(reviews);
})

//POST route for new review
reviewRouter.post('/', (req, res, next) => {
  if (req.body.name && req.body.rating && req.body.review) {  //object requirements
    let newReview = { //create object for newReview
      id: reviews.length + 1,
      name: req.body.name,
      rating: req.body.rating,
      review: req.body.review,
    };
    // console.log(newReview)
    reviews.push(newReview);  //push newReview to reviews data
    res.render("submitted", { //submitted view
      title: "Submitted",
      header: "Thank You for Your Review!",
      name: newReview.name,
      rating: newReview.rating,
      review: newReview.review
  })

  } else {
    //Error handling
    next(error(400,'Insufficient Data')); //if input doesn't include required data, return error
  }
})


//Parameters for review filtering
  //GET route
reviewRouter.get('/:id', (req, res, next) => { 
    // console.log(req.params.id)
    const user = reviews.find(user => { //loop through reviews data
       if(user.id == req.params.id){  //if requested id = user id
            return true;  //return review
        } 
    }) 
      //Error handling
      if (user) res.json(user); //if user exists, return user
      else next(error(404,'Review not found')); //else error
    })

  //PUT route
reviewRouter.put('/:id', (req, res, next) => {
    const user = reviews.find((user, i) => {  //loop through reviews data
      if (user.id == req.params.id) {   //if requested id = user id
        for (const key in req.body) {   //loop through key in body
          reviews[i][key] = req.body[key];  //if keys match
        }
        return true;  //return body
      }
    });
    //Error handling
    if (user) res.json(user); //if user exists, return user
    else next(error(404,'Review not found')); //else error
  })
  
  //DELETE route
reviewRouter.delete('/:id', (req, res, next) => {  
  const user = reviews.find((user, i) => {  //loop through reviews data
      if (user.id == req.params.id) { //if requested id = user id
        reviews.splice(i, 1); //start at that index and delete 1 element
        return true;
      }
    });
    //Error handling
    if (user) res.json(user); //if user exists, return user
    else next(error(404,'Review not found')); //else error
  })

//Export default 
export { reviewRouter } ;