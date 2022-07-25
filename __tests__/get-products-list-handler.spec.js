const productsMock = require('./data.json');
const { getProductsList } = require('../product-service/functions/get-product-list-handler');

describe('getProductsList lambda', () => {
  it('Should return success response with found products', async () => {

    const response = await getProductsList({});
    const payload = JSON.parse(response.body);

    expect(payload.status).toBe('success');
    expect(payload.data).toEqual(productsMock);
  });
});
