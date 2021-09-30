const { Observable } = require("rxjs")

const obs = Observable.create(subscriber => {
    subscriber.next('RxJs')
    subscriber.next('é')
    subscriber.next('top')
    subscriber.next(2 + 2)
    subscriber.complete()
})

obs.subscribe(texto => {
    console.log(texto)
})