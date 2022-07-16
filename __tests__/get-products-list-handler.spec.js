const { getProductsList } = require('../product-service/get-product-list-handler');

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

describe('getProductsList lambda', () => {
  it('Should return success response with found products', async () => {

    const response = await getProductsList({});
    const payload = JSON.parse(response.body);

    expect(payload.status).toBe('success');
    expect(payload.data).toEqual(productsMock.data);
  });
});
