# gsw

get, set, watch

[![github](https://badgen.net/badge//nju33,gsw/000?icon=github&list=1)](https://github.com/nju33/gsw)
[![npm:version](https://badgen.net/npm/v/gsw?icon=npm&label=)](https://www.npmjs.com/package/gsw)
[![typescript](https://badgen.net/badge/lang/typescript/0376c6?icon=npm)](https://www.typescriptlang.org/)
[![ci:status](https://badgen.net/circleci/github/nju33/gsw)](https://circleci.com/gh/nju33/gsw)
[![document:typedoc](https://badgen.net/badge/document/typedoc/9602ff)](https://docs--gsw.netlify.com/)
[![license](https://badgen.net/npm/license/gsw)](https://github.com/nju33/gsw/blob/master/LICENSE)
[![browserslist](https://badgen.net/badge/browserslist/chrome,edge/ffd539?list=1)](https://browserl.ist/?q=last+1+chrome+version%2C+last+1+edge+version)
[![code style: prettier](https://badgen.net/badge//prettier/ff69b3?label=code%20style)](https://github.com/prettier/prettier)

## Usage

````js
/**
 * To prepare of using the `gsw`
 * ```sh
 * yarn add gsw
 * ```
 */
import gsw from 'gsw';
````

or

```html
<script src="https://unpkg.com/gsw/gsw.js"></script>
<script>
  // Can use the `gsw` here.
</script>
```

## Example

```ts
const value = gsw({
  foo: 'str',
  bar: 123,
  baz: true
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
```

[![Edit gsw](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wn2myjq6lw?module=%2Fsrc%2Findex.ts)
