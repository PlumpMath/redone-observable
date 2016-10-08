# Redone Observable

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

### Reading values from an observable
```js
import { Autorun } from 'redone';
import { Sink } from 'redone-observable';
import Rx from 'rxjs/Rx';

const subject = new Rx.BehaviorSubject('test');
const sink = new Sink(subject);
Autorun.start(() => {
  console.log(sink.value);
});
// 'test'

subject.next('foo');
// 'foo'

sink.dispose();
subject.next('bar');
// (nothing printed)
```

### Pushing values through an observable
```js
import { Datum } from 'redone';
import { observe } from 'redone-observable';

const datum = new Datum('test');
const observable = observe(() => datum.get());
observable.subscribe(value => {
  console.log(value);
});
// 'test'

datum.set('foo');
// 'foo'
```

[npm-image]: https://img.shields.io/npm/v/redone-observable.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/redone-observable
[travis-image]: https://img.shields.io/travis/stephenbunch/redone-observable.svg?style=flat-square
[travis-url]: https://travis-ci.org/stephenbunch/redone-observable
[codecov-image]: https://img.shields.io/codecov/c/github/stephenbunch/redone-observable.svg?style=flat-square
[codecov-url]: https://codecov.io/github/stephenbunch/redone-observable
