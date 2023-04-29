// dotenv
require('dotenv').config();
const { GetObjectCommand, S3Client } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

const s3 = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_ACCESS_SECRET
  }
});
const BUCKET = process.env.BUCKET;

const generatePresignedUrl = async (fileName) => {

  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: fileName,
  });

  console.log('command: ', command);

  try {
    const response = await getSignedUrl(s3, command, { expiresIn: 900 });
    console.log(response);
    const str = response;
    return str;
  } catch (err) {
    return err;
  }
};

module.exports = {
  generatePresignedUrl,
};
