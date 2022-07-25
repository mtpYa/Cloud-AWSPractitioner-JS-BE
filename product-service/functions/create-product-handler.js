const { createNewProduct } = require('../da/products');
const { createResponse } = require('../helpers/response');
const { logInfo } = require('../helpers/logger');

module.exports.createProduct  = async (event) => {
  let requestBody;

  logInfo('createProduct', 'body', event.body);

  try {
    requestBody = JSON.parse(event.body);
  } catch (err) {
    return createResponse(400, { status: 'fail', message: 'Request body should be valid JSON' });
  }

  const { title, price, description, imageurl, count } = requestBody;

  if (!title || !price || !imageurl || !count) {
    return createResponse(400, { status: 'fail', message: 'Fields title, price, imageurl and count are required' });
  }

  const product = await createNewProduct(title, price, description, imageurl, count);

  return product ?
    createResponse(200, { status: 'success', data: product }) :
    createResponse(500, { status: 'fail', message: 'Unable to create new product' });
};
