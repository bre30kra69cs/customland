import {createLogger} from '../src/core/logger';

test('[createLogger] must return func', () => {
  expect(typeof createLogger()).toEqual('function');
});
