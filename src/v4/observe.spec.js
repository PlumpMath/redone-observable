/* global it expect */

import { Datum } from 'redone';
import observe from './observe';

it('should pump new values into the observable', () => {
  const datum = new Datum('');
  const obs = observe(() => datum.get());
  let result = '';
  const sub = obs.subscribe(val => {
    result += val;
  });
  datum.set('hel');
  datum.set('lo');
  sub.dispose();
  datum.set('!');
  expect(result).toBe('hello');
});
