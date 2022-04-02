const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = Schema({
    labels: [{ type: String }]
});

module.exports = Categories = mongoose.model('Categories', CategoriesSchema);