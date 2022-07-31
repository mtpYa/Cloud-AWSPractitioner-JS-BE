module.exports.logInfo = (method, target, arguments) => {
  const message = `${method} received ${target} payload: ${arguments}`;

  console.log(message);
}
