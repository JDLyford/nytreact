const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: Date,
    },
    url: {
        type: url,
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
