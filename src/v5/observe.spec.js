/* global it expect */

import { Dependency } from 'redone';
import observe from './observe';

it('should pump new values into the observable', () => {
  const dep = new Dependency();
  let value = '';
  const obs = observe(() => {
    dep.depend();
    return value;
  });
  let result = '';
  const sub = obs.subscribe(val => {
    result += val;
  });
  value = 'hel';
  dep.changed();
  value = 'lo';
  dep.changed();
  sub.unsubscribe();
  value = '!';
  dep.changed();
  expect(result).toBe('hello');
});
