const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint....');
// });

// 2) ROUTE-HANDLERS

// app.get('/api/v1/tours', getAllTours); // Handling GET Requests
// app.post('/api/v1/tours', createTour); // Handling POST Requests
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour); // Handling PATCH Requests
// app.delete('/api/v1/tours/:id', deleteTour); // Handling Delete Requests

// 3) ROUTES

app.use('/api/v1/tours', tourRouter);

app.use('/api/v1/users', userRouter);

// 4) START SERVER

module.exports = app;
