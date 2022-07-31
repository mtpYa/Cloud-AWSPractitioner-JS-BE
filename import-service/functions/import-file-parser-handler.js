const { S3Client, GetObjectCommand  } = require('@aws-sdk/client-s3');
const { createResponse } = require('../helpers/response');
const { parseCSVStream } = require('../helpers/csv-parser');

const REGION = 'eu-west-1';

module.exports.importFileParser = async (event) => {
  const params = {
    Bucket: event.Records[0].s3.bucket.name,
    Key: decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '))
  };

  const s3Client = new S3Client({ region: REGION });
  const s3Command = new GetObjectCommand(params);

  try {
    const data = await s3Client.send(s3Command);
    const result = await parseCSVStream(data.Body);

    console.log(result);

    return createResponse(200, { status: 'success', data: {} });
  } catch (err) {
    return createResponse(500, { status: 'fail', message: `Unable to parse uploaded file: ${err}` });
  }

};
