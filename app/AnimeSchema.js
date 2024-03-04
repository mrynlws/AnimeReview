const mongoose = require("mongoose");

//connect to DB
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

//schema
const animeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: [String], required: true },
    rating: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//model
module.exports = mongoose.models.Anime || mongoose.model("Anime", animeSchema);
