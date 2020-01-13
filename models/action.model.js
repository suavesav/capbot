const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ActionSchema = new Schema({
    name: {type: String, required: true, max: 100},
    description: {type: String, max: 500},
});

// Export the model
module.exports = mongoose.model('Action', ActionSchema);
