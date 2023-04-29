// dotenv
require('dotenv').config();

// dependancies
const path = require('path');
const express = require('express');
const cors = require('cors');

// routers
const imageRouter = require('./routers/images.js');

// express app
const app = express();

// body interpreters
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cors
app.use(cors({ origin: '*' }));

// sending static
app.use(express.static(path.join(__dirname, '../client/dist')));

//routes
// we don't actually use this anymore - we use the imagekit CDN instead
// app.use('/image', imageRouter);

// needed to send the base files
app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../client/dist/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// run the app
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
