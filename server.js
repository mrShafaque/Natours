const mongoose = require('mongoose');
const dotenv = require('dotenv'); // npm i dotnenv is first done in the terminal
dotenv.config({ path: './config.env' }); // this command connects nodejs to config.env file

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

// const testTour = new Tour({
//   name: 'The Park Camper',
//   price: 997,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('ERROR❌❌:', err);
//   });

// console.log(app.get('env'));
// console.log(process.env); // contains all the env variables

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.....`);
});
