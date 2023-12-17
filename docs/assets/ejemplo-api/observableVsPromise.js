const { set } = require('date-fns');
const { Observable } = require('rxjs');
const { filter } = require('rxjs/operators');

const doSomethingPromise = () => {
    return new Promise((resolve, reject) => {
        resolve ('Hola promise');
    });
}

// la promesa se llama en un contexto asincrono
(async () => {
  const rta = await doSomethingPromise();
  console.log(rta);
})();


// con un obsevable se puede hacer lo mismo
const doSomethingObservable = () => {
    return new Observable((observer) => {
        observer.next('Hola observer');
        observer.next('Hola observer2');
        setTimeout(() => {
            observer.next('Hola observer con delay');
            observer.complete();
        }, 3000);
    });
}

doSomethingObservable().subscribe((rta) => {
    console.log(rta);
});


// Un observador tiene pipes, que son transformacionoes que se pueden hacer a los datos que emite el observable
const ObservablePipe = () => {
    return new Observable((observer) => {
        observer.next('Observer con pipe');
        observer.next(null);
        setTimeout(() => {
            observer.next('Hola observer con delay');
            //observer.complete();
        }, 3000);
        observer.next('Observer con pipe2');
        setTimeout(() => {
          observer.next(null);
      }, 4000);
    });
}

ObservablePipe().pipe(
    filter((rta) => rta !== null)
).subscribe((rta) => {
    console.log(rta);
});