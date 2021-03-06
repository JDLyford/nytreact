const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact", {
        useMongoClient: true
    }
);

const articleSeed = [{}
];

db.Article
    .remove({})
    .then(() => db.Article.collection.insertMany(articleSeed))
    .then(data => {
        console.log(data.insertedIds.length + " articles inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
