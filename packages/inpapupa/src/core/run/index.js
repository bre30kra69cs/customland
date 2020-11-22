const {pipe} = require('../../../../../infrastructure/utils/pipe');

const {parseArgsMiddleware} = require('../parser');
const {createDetectMiddleware} = require('../detect');
const {validateMiddlewares} = require('../validate');
const {handlerMiddleware} = require('../handler');

const RUN_BUILDER_CONFIG = {
  middlewares: [],
};

function createRunBuilder(initRunBuilderConfig = RUN_BUILDER_CONFIG) {
  const runBuilderConfig = {...RUN_BUILDER_CONFIG, ...initRunBuilderConfig};
  const {middlewares} = runBuilderConfig;
  return function createRun(...stages) {
    const detectMiddleware = createDetectMiddleware(...stages);
    return function run() {
      const dispatcher = pipe(
        parseArgsMiddleware,
        detectMiddleware,
        ...middlewares,
        validateMiddlewares,
        handlerMiddleware,
      );
      dispatcher();
    };
  };
}

module.exports = {
  createRunBuilder,
};
