const { v4: uuidv4 } = require('uuid');
const pool = require('../db/db.client');

module.exports.queryAllProducts = async () => {
  const query = `
    SELECT id, title, price, description, imageurl, count 
    FROM products
    INNER JOIN stocks
      ON products.id = stocks.product_id
  `;

  try {
    pool.connect();

    const res = await pool.query(query);

    return res.rows;
  } catch (err) {
    return null;
  }
};

module.exports.queryProductById = async (productId) => {
  const query = `
    SELECT id, title, price, description, imageurl, count 
    FROM products
    INNER JOIN stocks
      ON products.id = stocks.product_id
    WHERE id = $1
  `;
  const values = [ productId ];

  try {
    pool.connect();

    const res = await pool.query(query, values);

    return res.rows[0];
  } catch (err) {
    return null;
  }
};

module.exports.createNewProduct = async (title, price, description, imageurl, count) => {
  const productQuery = `
    INSERT INTO products(id, title, price, description, imageurl)
      VALUES ($1, $2, $3, $4, $5) 
  `;
  const stocksQuery = `
    INSERT INTO stocks(product_id, count) 
      VALUES ($1, $2) 
  `;

  const productId = uuidv4();

  const productValues = [ productId, title, price, description, imageurl ];
  const stockValues = [productId, count];

  pool.connect();

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    await client.query(productQuery, productValues);
    await client.query(stocksQuery, stockValues);

    await client.query('COMMIT');

    return { id: productId, title, price, description, imageurl, count };
  } catch (err) {
    await client.query('ROLLBACK');

    return null;
  } finally {
    client.release();
  }
}
