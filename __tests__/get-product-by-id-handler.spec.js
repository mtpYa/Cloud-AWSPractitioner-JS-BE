const productsMock = require('./data.json');
const { getProductsById } = require('../product-service/functions/get-product-by-id-handler');

describe('getProductsById lambda', () => {
  it('Should return success response with found product', async () => {
    const eventData = {
      pathParameters: { id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa' }
    }

    const response = await getProductsById(eventData);
    const payload = JSON.parse(response.body);

    expect(payload.status).toBe('success');
    expect(payload.data).toEqual(productsMock[0]);
  });

  it('Should return failed response with error message', async () => {
    const eventData = {
      pathParameters: { id: '1' }
    }

    const response = await getProductsById(eventData);
    const payload = JSON.parse(response.body);

    expect(payload.status).toBe('fail');
    expect(payload.message).toBe('Unable to find product with id 1');
  });
});
