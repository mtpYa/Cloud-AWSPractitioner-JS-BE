const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { createResponse } = require('../helpers/response');

const REGION = 'eu-west-1';
const BUCKET = 'mtp-shop-assets';

module.exports.importProductsFile = async (event) => {
  const fileName = event?.queryStringParameters?.name;

  if (!fileName) {
    return createResponse(400, { status: 'fail', message: 'File name is not specified' });
  }

  const params = {
    Bucket: BUCKET,
    Key: `uploaded/${fileName}`
  };

  const s3Client = new S3Client({ region: REGION });
  const s3Command = new PutObjectCommand(params);

  try {
    const url = await getSignedUrl(s3Client, s3Command, { expiresIn: 3600 });

    return createResponse(200, { status: 'success', data: { url } })
  } catch (err) {
    createResponse(500, { status: 'fail', message: `Unable to create signed url: ${err}` });
  }
};
