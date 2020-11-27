type Level = 'log' | 'error' | 'warn';

interface Action {
  level: Level;
}

type Middleware = (action: Action) => Action;

interface LoggerConfig {
  middlewares: Middleware[];
}

export const createCounter = (init: number = 0) => {
  let count = init;

  return () => {
    const prev = count;
    count += 1;
    return prev;
  };
};

const defaultLoggerConfig: LoggerConfig = {
  middlewares: [],
};

export const createLogger = (config = defaultLoggerConfig) => {
  const loggerConfig = {...defaultLoggerConfig, ...config};

  return () => {};
};
