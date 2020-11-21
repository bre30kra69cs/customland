function defaultFormatter() {
  return function messageFormatter(...args) {
    return args;
  };
}

function createFormatterMiddleware(formatterConfig, counter) {
  const {formatter, type, level, count, timestamp} = formatterConfig;

  const messageFormatter = formatter({
    count,
    timestamp,
    counter,
  });

  return function formatterAction(...messages) {
    const output = messageFormatter(...messages);

    return {
      type,
      level,
      messages,
      output,
    };
  };
}

module.exports = {
  createFormatterMiddleware,
  defaultFormatter,
};
