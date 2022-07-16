const products = require('./data.json');

module.exports.getProductsById  = async (event) => {
  const { id } = event.pathParameters;
  const product = products.data.find((product) => product.id === id);
  return product ? {
    statusCode: 200,
    body: JSON.stringify({
      status: 'success',
      data: product
    })
  } : {
    statusCode: 404,
    body: JSON.stringify({
      status: 'fail',
      message: `Unable to find product with id ${id}`
    })
  };
};
