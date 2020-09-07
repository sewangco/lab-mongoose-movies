const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lab-mongoose-labs", {
  useNewUrlParser: true,
});

const celebrities = [
  {
    name: "Tom Cruz",
    occupation: "Actor",
    catchPhrase: "Hi there ",
  },
  {
    name: "Harry Potter",
    occupation: "Wizard",
    catchPhrase: "I love Hogwarts ",
  },
  {
    name: "Taylor Swift",
    occupation: "Singer",
    catchPhrase: "The old taylor can't come to the phone right now ",
  },
];

Celebrity.create(celebrities)
  .then((data) => {
    console.log(`Success! Added ${data.length} to the database`);
  })
  .catch((err) => {
    console.log(err);
  });
