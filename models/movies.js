const mongoose = require("mongoose");

// this is a optional short cut
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String], // this is an array of strings
  nowShowing: Boolean,
});
