import gsw, {GswHandler} from '.';

interface AObject {
  foo: string;
  bar: number;
  baz: boolean;
}

let value: GswHandler<AObject>;
beforeEach(() => {
  const aObject: AObject = {
    foo: 'str',
    bar: 123,
    baz: true,
  };

  value = gsw(aObject);
});

test('get', () => {
  expect(value('foo')).toBe('str');
});

test('set', () => {
  value('bar', 456);
  expect(value('bar')).toBe(456);
});

test('watch', () => {
  const fakeListener = jest.fn();
  value('baz', fakeListener);
  value('baz', false);
  value('baz', false);
  value('baz', true);
  expect(fakeListener.mock.calls).toHaveLength(2);
  expect(fakeListener.mock.calls[0]).toMatchObject([false, true]);
  expect(fakeListener.mock.calls[1]).toMatchObject([true, false]);
});
