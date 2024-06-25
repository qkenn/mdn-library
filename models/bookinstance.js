const mongoose = require('mongoose');
const { schema } = require('./author');

const Schema = mongoose.Schema;

// Creating book instance model
const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance',
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for book instance url
BookInstanceSchema.virtual('url').get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
