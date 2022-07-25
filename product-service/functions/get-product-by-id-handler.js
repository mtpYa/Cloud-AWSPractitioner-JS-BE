const { queryProductById } = require('../da/products');
const { createResponse } = require('../helpers/response');
const { logInfo } = require('../helpers/logger');

module.exports.getProductsById  = async (event) => {
  logInfo('getProductsById', 'query', event.pathParameters);

  const { id } = event.pathParameters;
  const product = await queryProductById(id);

  return product ?
    createResponse(200, { status: 'success', data: product }) :
    createResponse(500, { status: 'fail', message: `Unable to find product with id ${id}` });
};
