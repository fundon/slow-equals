# slow-equals

A fast, compare tow strings, [slowequals](https://crackstation.net/hashing-security.htm#slowequals).

  [![NPM version][npm-img]][npm-url]
  [![Build status][travis-img]][travis-url]
  [![Test coverage][coveralls-img]][coveralls-url]
  [![License][license-img]][license-url]
  [![Dependency status][david-img]][david-url]

## Benchmark

`npm run benchmark`

```
Compare tow equal short strings:
slow-equals x 31,602,870 ops/sec ±0.75% (96 runs sampled)
=== x 63,884,781 ops/sec ±1.32% (94 runs sampled)
== x 62,142,074 ops/sec ±4.93% (91 runs sampled)
Fastest is ===,==

Compare tow equal long strings:
slow-equals x 6,905,069 ops/sec ±0.74% (96 runs sampled)
=== x 64,830,622 ops/sec ±0.98% (96 runs sampled)
== x 65,022,256 ops/sec ±1.71% (97 runs sampled)
Fastest is ===

Compare tow not equal short strings:
slow-equals x 22,978,381 ops/sec ±1.01% (93 runs sampled)
=== x 64,601,358 ops/sec ±1.25% (97 runs sampled)
== x 65,122,107 ops/sec ±0.81% (95 runs sampled)
Fastest is ==,===

Compare tow not equal long strings:
slow-equals x 8,872,916 ops/sec ±0.74% (98 runs sampled)
=== x 65,217,667 ops/sec ±0.72% (96 runs sampled)
== x 65,377,054 ops/sec ±0.73% (96 runs sampled)
Fastest is ==,===
```

```js
var slowEquals = require('slow-equals');

var result = slowEquals('Hello', 'hello');
// result => false
```

## Installation

```bash
$ npm i slow-equals
```

## License

  [MIT](LICENSE)

[npm-img]: https://img.shields.io/npm/v/slow-equals.svg?style=flat-square
[npm-url]: https://npmjs.org/package/slow-equals
[travis-img]: https://img.shields.io/travis/fundon/slow-equals.svg?style=flat-square
[travis-url]: https://travis-ci.org/trekjs/slow-equals
[coveralls-img]: https://img.shields.io/coveralls/fundon/slow-equals.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/fundon/slow-equals?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[david-img]: https://img.shields.io/david/fundon/slow-equals.svg?style=flat-square
[david-url]: https://david-dm.org/fundon/slow-equals
