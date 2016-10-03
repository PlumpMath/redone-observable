import { Dependency } from 'redone';

export default class Sink {
  constructor(observable) {
    this._dependency = new Dependency();
    this._value = undefined;
    this._subscription = observable.subscribe(value => {
      if (value !== this._value) {
        this._value = value;
        this._dependency.changed();
      }
    });
  }

  get value() {
    this._dependency.depend();
    return this._value;
  }

  dispose() {
    this._subscription.unsubscribe();
  }
}
