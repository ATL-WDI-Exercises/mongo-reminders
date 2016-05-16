let mongoose = require('mongoose');
let Reminder = require('./reminder');

let AuthorSchema = new mongoose.Schema({
  name: String,
  reminders: [Reminder.schema]
});

AuthorSchema.methods.toString = function() {
  return `${this.name} has reminders = \n\t${this.reminders.join('\n\t')}`;
}

module.exports = mongoose.model("Author", AuthorSchema);
