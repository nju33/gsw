import gsw from 'gsw';

const value = gsw({
  foo: 'str',
  bar: 123,
  baz: true,
});

// get
expect(value('foo')).toBe('str');

// set
value('bar', 456);
expect(value('bar')).toBe(456);

// listener
value('baz', (newValue, oldValue) => {
  console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
});
value('baz', false);
// newValue: false, oldValue: true
value('baz', false);
value('baz', true);
// newValue: true, oldValue: false
