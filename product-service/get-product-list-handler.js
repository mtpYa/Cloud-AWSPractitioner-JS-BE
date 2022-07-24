const products = require('./data.json');

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: 'success',
      data: products.data
    })
  };
};
