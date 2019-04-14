import gsw from 'gsw';

/**
 * @enum
 */
const Label = {
  Get: '[Get]',
  Set: '[Set]',
  Watch: '[Watch]',
};

const value = gsw({
  foo: 'str',
  bar: 123,
  baz: true,
});

console.log("%s value('foo') === %s", Label.Get, value('foo'));
console.log();

console.log("%s value('bar', 456)", Label.Set);
value('bar', 456);
console.log("%s value('foo') === %s", Label.Get, value('bar'));
console.log();

console.log(
  `
%s
value('baz', (newValue, oldValue) => {
	console.log(\`newValue: \${newValue}, oldValue: \${oldValue}\`);
});
`.trim(),
  Label.Watch,
);
value(
  'baz',
  (newValue, oldValue): void => {
    console.log(`newValue: ${newValue}, oldValue: ${oldValue}`);
  },
);
console.log("%s value('baz', false)", Label.Set);
value('baz', false);
// NewValue: false, oldValue: true
console.log("%s value('baz', false)", Label.Set);
value('baz', false);
console.log("%s value('baz', true)", Label.Set);
value('baz', true);
// NewValue: true, oldValue: false
