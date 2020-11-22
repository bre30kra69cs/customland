const {timestamper} = require('../timestamper');

function defaultFormatter() {
  return function messageFormatter(...args) {
    return args;
  };
}

function createFormatterMiddleware(formatterConfig, counter) {
  const {formatter, type, level} = formatterConfig;

  const messageFormatter = formatter({
    ...formatterConfig,
    counter,
    timestamper,
  });

  return function formatterAction(...source) {
    const result = messageFormatter(...source);

    return {
      type,
      level,
      source,
      result,
    };
  };
}

module.exports = {
  createFormatterMiddleware,
  defaultFormatter,
};
