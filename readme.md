# Mongo Reminders

## Description
This exercise demonstrates how to create a one-to-many association in Mongoose and MongoDB and how to use that association in a seeds file.

Here we have a one-to-many between Authors and Reminders.

## Setup
Fork or Clone this repo.

```bash
npm install
```

## Add your schemas

Edit `models/author.js` and `models/reminder.js` and add the schemas to those files.

## Edit `seeds.js`

Edit the `seeds.js` file and add the code to remove the old authors from the DB and create and save new authors. Each author should have some reminders embedded in the author document. Finally read the newly saved authors from the DB and print them out to the console.

## Run the `seeds.js` script

```bash
node seeds.js
```
