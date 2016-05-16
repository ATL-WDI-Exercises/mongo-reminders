let mongoose = require('mongoose');
let conn = mongoose.connect('mongodb://localhost/reminders');
let Author = require("./models/author");
let Reminder = require("./models/reminder");

console.log('Deleting old authors...');
Author.remove({})
.then( () => {
  let authors = [
    Author({name: "bob"}),
    Author({name: "charlie"}),
    Author({name: "tom"})
  ];
  let reminders = [
    new Reminder({body: "reminder1!!"}),
    new Reminder({body: "reminder2!!"}),
    new Reminder({body: "reminder3!!"}),
    new Reminder({body: "reminder4!!"}),
    new Reminder({body: "reminder5!!"}),
    new Reminder({body: "reminder6!!"})
  ];

  for(let i = 0; i < authors.length; i++) {
    authors[i].reminders.push(reminders[i], reminders[i+3]);
  }
  console.log('Saving authors...');
  return Author.create(authors)
})
.then(saved => {
  console.log('Saved', saved.length, 'authors.');
  return Author.find({});
})
.then(found => {
  console.log('Authors Found:');
  found.forEach(f => {
    console.log(f.toString());
  });
  conn.disconnect();
}, (err) => {
  console.log('ERROR:', err);
});
