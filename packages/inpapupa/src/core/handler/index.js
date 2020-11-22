function handlerMiddleware(action) {
  const {callback} = action;
  callback(action);
}

module.exports = {
  handlerMiddleware,
};
