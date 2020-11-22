const {timestamper} = require('../timestamper');

function defaultFormatter() {
  return function messageFormatter(...args) {
    return args;
  };
}

function createFormatterMiddleware(formatterConfig, counter) {
  const {formatter, type, level} = formatterConfig;
  const levelLowerCase = level.toLowerCase();
  const messageFormatter = formatter({...formatterConfig, counter, timestamper});
  return function formatterAction(...source) {
    const result = messageFormatter(...source);
    const action = {type, level: levelLowerCase, source, result};
    return action;
  };
}

module.exports = {
  createFormatterMiddleware,
  defaultFormatter,
};
