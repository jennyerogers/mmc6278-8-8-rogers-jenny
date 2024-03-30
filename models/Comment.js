const { Schema } = require('mongoose');

const CommentSchema = new Schema({
    author: {
        type: String,
        default: "Anonymous",
    },
// Create an "author" property with type String and default of 'Anonymous'
    body: {
        type: String,
        required: true
    },
// Create a "body" property with type String and make it required
    createdAt: {
        type: Date,
        default: Date.now,
    }
// Create a "createdAt" property with type Date and set default to Date.now
})

module.exports = CommentSchema
