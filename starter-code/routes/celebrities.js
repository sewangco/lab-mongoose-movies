const express = require("express");
const router = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((celebritiesFromDB) => {
      res.render("celebrities/index", { celebritiesList: celebritiesFromDB });
    })
    .catch((err) => next(err));
});

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new");
});

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  })
    .then((celebrity) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log("error in adding celebrity ", err);
      res.redirect("celebrities/new");
    });
});

router.get("/celebrities/:id", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebritiesFromDB) => {
      res.render("celebrities/show", { celebritiesDetails: celebritiesFromDB });
    })
    .catch((err) => next(err));
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
