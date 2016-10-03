import { Observable } from 'rxjs/Observable';
import { Autorun } from 'redone';

export default function (accessor) {
  return new Observable(observer => {
    const autorun = Autorun.start(() => {
      observer.next(accessor());
    });
    return () => {
      autorun.dispose();
    };
  });
}
