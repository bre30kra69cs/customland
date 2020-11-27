import {pipe} from '../src/pipe';
import {tap} from '../src/tap';

describe('@utils', () => {
  describe('tap', () => {
    test('must return undefined', () => {
      expect(tap()).toEqual(undefined);
    });
    test('must return single value', () => {
      expect(tap(1)).toEqual(1);
      expect(tap('test')).toEqual('test');
    });
    test('must return values', () => {
      expect(tap(1, 2, 3)).toEqual([1, 2, 3]);
      expect(tap(['test1', 'test2'])).toEqual(['test1', 'test2']);
    });
  });

  describe('pipe', () => {
    test('must return tap', () => {
      expect(pipe()).toStrictEqual(tap);
    });
    test('must return single func', () => {
      const middleware = jest.fn();

      expect(pipe(middleware)).toEqual(middleware);
    });
    test('must compose funcs', () => {
      const middleware = jest.fn((x: number) => x + 1);
      const piped = pipe(middleware, middleware, middleware);

      expect(piped(0)).toEqual(2);
      expect(piped(10)).toEqual(12);
    });
  });
});
