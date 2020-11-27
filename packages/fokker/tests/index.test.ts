import {createLogger, createCounter} from '../src';

describe('@fokker', () => {
  describe('logger', () => {
    test('must return function', () => {
      expect(typeof createLogger()).toEqual('function');
    });
  });

  describe('counter', () => {
    test('must return function', () => {
      expect(typeof createCounter()).toEqual('function');
    });
    test('create isolated counter', () => {
      const counter1 = createCounter();
      const counter2 = createCounter();

      expect(counter1()).toEqual(0);
      expect(counter1()).toEqual(1);
      expect(counter2()).toEqual(0);
      expect(counter2()).toEqual(1);
    });
  });
});
