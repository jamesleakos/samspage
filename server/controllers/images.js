// dotenv
require('dotenv').config();
// internal
const s3 = require('../images/s3.js');
const images = require('../images/imagelist.js');

// get env
require('dotenv').config();

// we don't actually use this anymore - we use the imagekit CDN instead
// exports.getRandomImage = (req, res) => {
//   const fileName = 'images/' + images[Math.floor(Math.random() * images.length)];

//   s3.generatePresignedUrl(fileName)
//     .then((url) => {
//       res.status(200).send(url);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send(err);
//     });
// };
