const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creating author model
const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: Date,
  date_of_death: Date,
});

// Virtual for author's full name
AuthorSchema.virtual('name').get(function () {
  // Checks if author's first name and last name exists, then returns full name
  // Otherwise returns an empty string
  let fullName = '';

  if (this.first_name && this.family_name) {
    fullName = `${this.family_name}, ${this.first_name}`;
  }

  return fullName;
});

// Virtual for author's URL
AuthorSchema.virtual('url').get(function () {
  return `/catalog/author/${this._id}`;
});

// Export model
module.exports = mongoose.model('Author', AuthorSchema);
