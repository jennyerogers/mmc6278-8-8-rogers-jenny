const { Schema, model, models } = require('mongoose');

const TagSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
// Create a name property with type String and make it required and unique
})

module.exports = models.Tag || model('Tag', TagSchema)
