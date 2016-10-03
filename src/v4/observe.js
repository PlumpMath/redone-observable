import Rx from 'rx';
import { Autorun } from 'redone';

export default function (accessor) {
  return Rx.Observable.create(observer => {
    const autorun = Autorun.start(() => {
      observer.onNext(accessor());
    });
    return () => {
      autorun.dispose();
    };
  });
}
