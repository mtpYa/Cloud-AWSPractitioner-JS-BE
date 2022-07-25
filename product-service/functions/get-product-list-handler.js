const { queryAllProducts } = require('../da/products');
const {createResponse} = require('../helpers/response');
const { logInfo } = require('../helpers/logger');

module.exports.getProductsList = async (event) => {
  logInfo('getProductsList', 'no', '{}');

  const products = await queryAllProducts();

  return products ?
    createResponse(200, { status: 'success', data: products }) :
    createResponse(500, { status: 'fail', message: 'Unable to fetch products' });
};
