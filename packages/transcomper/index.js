const {parseConfig} = require('./src/parse-config');
const {global} = require('./src/logger');

global('transcomper started');
parseConfig();
