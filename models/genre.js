const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating genre model
const GenreSchema = new Schema({
  name: { type: String, required: true, maxLength: 100, minLength: 3 },
});

// Virtual for genre url
GenreSchema.virtual('url').get(function () {
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model('Genre', GenreSchema);
