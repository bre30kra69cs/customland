const parallel = {
  log(action) {
    const {result} = action;

    console?.log?.(...result);
  },
  error(action) {
    const {result} = action;

    console?.error?.(...result);
  },
  warn(action) {
    const {result} = action;

    console?.warn?.(...result);
  },
};

const sequence = {
  log(action) {
    const {result} = action;

    result.forEach((message) => console?.log?.(message));
  },
  error(action) {
    const {result} = action;

    result.forEach((message) => console?.error?.(message));
  },
  warn(action) {
    const {result} = action;

    result.forEach((message) => console?.warn?.(message));
  },
};

const typeMapper = {
  parallel,
  sequence,
};

const defaultHandlerConfig = {
  type: 'parallel',
};

function createConsoleHandler(initHandlerConfig = defaultHandlerConfig) {
  const handlerConfig = {...defaultHandlerConfig, ...initHandlerConfig};

  const {type} = handlerConfig;

  const handler = typeMapper[type] || parallel;

  return handler;
}

module.exports = {
  createConsoleHandler,
};
