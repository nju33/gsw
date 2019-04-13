import gsw from 'gsw';

const value = gsw({
  foo: 'str',
  bar: 123,
  baz: true,
});

// Get
expect(value('foo')).toBe('str');

// Set
value('bar', 456);
expect(value('bar')).toBe(456);

// Listener
value('baz', (newValue, oldValue) => {
  console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
});
value('baz', false);
// NewValue: false, oldValue: true
value('baz', false);
value('baz', true);
// NewValue: true, oldValue: false
