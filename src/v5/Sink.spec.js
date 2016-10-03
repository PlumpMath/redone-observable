/* global it expect */

import Rx from 'rxjs/Rx';
import { Autorun } from 'redone';
import Sink from './Sink';

it('should update when a new value comes out', () => {
  const subject = new Rx.BehaviorSubject('h');
  const sink = new Sink(subject);
  let result = '';
  const auto = Autorun.start(() => {
    result += sink.value;
  });
  subject.next('el');
  subject.next('lo');
  sink.dispose();
  subject.next('!');
  auto.dispose();
  expect(result).toBe('hello');
});
