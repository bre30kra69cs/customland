const parallel = {
  log(action) {
    const {messages} = action;

    console?.log?.(...messages);
  },
  error(action) {
    const {messages} = action;

    console?.error?.(...messages);
  },
  warn(action) {
    const {messages} = action;

    console?.warn?.(...messages);
  },
};

const sequence = {
  log(action) {
    const {messages} = action;

    messages.forEach((message) => console?.log?.(message));
  },
  error(action) {
    const {messages} = action;

    messages.forEach((message) => console?.error?.(message));
  },
  warn(action) {
    const {messages} = action;

    messages.forEach((message) => console?.warn?.(message));
  },
};

const typeSwitcher = {
  parallel,
  sequence,
};

const defaultHandlerConfig = {
  type: 'parallel',
};

function createConsoleHandler(initHandlerConfig = defaultHandlerConfig) {
  const handlerConfig = {...defaultHandlerConfig, ...initHandlerConfig};

  const {type} = handlerConfig;

  return typeSwitcher[type] || parallel;
}

module.exports = {
  createConsoleHandler,
};
