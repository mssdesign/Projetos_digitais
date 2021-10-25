const { from } = require("rxjs")
const { map } = require("rxjs/operators")

const notas = [6.7, 8, 2.1, 7.4, 5.5, 4.2]

const obs = from(notas)
    .pipe (
        map(element => element > 7 ? 'Aprovado!' : 'Reprovado e safado!'),
        map(status => status[0])
    )

    .subscribe(status => {
        console.log(status)
    })