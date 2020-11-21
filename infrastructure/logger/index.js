const {createLogger, formatters, handlers} = require('../../packages/fokker');

const consoleHandler = handlers.console({
  type: 'sequence',
});

const fileHandler = handlers.file({
  name: 'test',
});

const {createDispatcher} = createLogger({
  handlers: [fileHandler],
});

const commonDispatcher = createDispatcher({
  level: 'error',
  formatter: formatters.common,
});

commonDispatcher(1, 2);
