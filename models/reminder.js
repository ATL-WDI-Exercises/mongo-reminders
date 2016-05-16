let mongoose = require('mongoose')

let ReminderSchema = new mongoose.Schema({
  body: String
});

module.exports = mongoose.model("Reminder", ReminderSchema);
