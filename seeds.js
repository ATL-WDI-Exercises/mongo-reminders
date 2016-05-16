let mongoose = require('mongoose');
let conn = mongoose.connect('mongodb://localhost/reminders');
let Author = require("./models/author");
let Reminder = require("./models/reminder");

// TODO: use the Mongoose API to do the following
//  (1) remove all of the old authors from the DB
//  (2) create some new authors with each author having some reminders
//  (3) save the new authors (with their embedded reminders)
//  (4) get all of the new authors from the DB and print them out along with
//      their reminders. You may want to add a nice "toString" method to your
//      AuthorSchema that returns a printable string containing the author and
//      reminder information.
