const { Schema, model, SchemaTypes, models} = require('mongoose');
const CommentSchema = require('./Comment')

const PostSchema = new Schema({
// Create an "title" property with type String that is required and unique
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
// Create an "body" property with type String that is required
  createdAt: {
    type: Date,
    default: Date.now,
  },
// Create a "createdAt" property with type Date and set default to Date.now
  comments: [CommentSchema],
// Create a "comments" property that is an array of CommentSchema (a subdocument)
  tags: [{
    type: SchemaTypes.ObjectId,
    ref: 'Tag',
  }],
// Create a "tags" property that is an array of objects
// with type SchemaTypes.ObjectId and ref 'Tag'
slug: {
  type: String,
}
// Create a "slug" property with type String
})

// Turns the first five words of the title and lowercases them
// and joins them on hypens.
// Ex: The Trouble With JavaScript => the-trouble-with-javascript
PostSchema.pre('save', async function(next) {
  this.slug = this.title
    .split(' ')
    .slice(0, 5)
    .join('-')
    .toLowerCase()
    .replace(/[',.*\?\!\\\$@;:"]/, "")
  next()
})

module.exports = models.Post || model('Post', PostSchema)
