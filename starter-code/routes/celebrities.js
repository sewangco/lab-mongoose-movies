const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((celebritiesFromDB) => {
      res.render("celebrities/index", { celebritiesList: celebritiesFromDB });
    })
    .catch((err) => console.log(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrities.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  });
  // .then((book) => {
  //   console.log(`New book was created: ${book}`);
  //   res.redirect(`/books/${book._id}`);
  // })
  // .catch((err) => {
  //   console.log(error);
  // });
});

router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebritiesFromDB) => {
      res.render("celebrities/show", { celebritiesDetails: celebritiesFromDB });
    })
    .catch((err) => next(err));
});

module.exports = router;
