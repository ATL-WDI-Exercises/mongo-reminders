let mongoose = require('mongoose');
let Reminder = require('./reminder');

// TODO: add your AuthorSchema here.

module.exports = mongoose.model("Author", AuthorSchema);
