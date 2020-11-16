const {parseConfig} = require('./src/parse-config');
const {global} = require('./src/logger');

global('[started] transcomper');
parseConfig();
