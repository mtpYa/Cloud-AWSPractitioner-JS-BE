module.exports.createResponse = (statusCode, body, headers = {}) => {
  return {
    statusCode,
    headers: {
      'Content-type': 'application/json',
      ...headers
    },
    body: JSON.stringify(body)
  }
}
