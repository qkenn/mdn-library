const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating book model
const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
});

// Virtual for book url
BookSchema.virtual('url').get(function () {
  return `/catalog/book/${this._id}`;
});

// Export model
module.exports = mongoose.model('Book', BookSchema);
