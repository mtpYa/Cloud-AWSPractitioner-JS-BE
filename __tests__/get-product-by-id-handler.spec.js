const { getProductsById } = require('../product-service/get-product-by-id-handler');

const productsMock = {
  "data": [{
    "id": "7567a",
    "title": "test title",
    "price": 12,
    "description": "Test description",
    "imageUrl": "http://test.com/test.png"
  }]
};
jest.mock('../product-service/data.json', () => productsMock, { virtual: true });

describe('getProductsById lambda', () => {
  it('Should return success response with found product', async () => {
    const eventData = {
      pathParameters: { id: '7567a' }
    }

    const response = await getProductsById(eventData);
    const payload = JSON.parse(response.body);

    expect(payload.status).toBe('success');
    expect(payload.data).toEqual(productsMock.data[0]);
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
