const csv = require('csv-parser');

module.exports.parseCSVStream = (stream) => {
  return new Promise((resolve, reject) => {
    const result = [];

    stream
      .pipe(csv())
      .on('data', (data) => result.push(data))
      .on('end', () => resolve(result))
      .on('error', (err) => reject(err));
  });
}
