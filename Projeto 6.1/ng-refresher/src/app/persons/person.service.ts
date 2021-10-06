import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonService {
    pessoasAlteração = new Subject<string[]>();

    persons: string[] = ['Ana', 'Marcos', 'Eu'];

    constructor(private http: HttpClient) {};

    fetchPersons() {
        this.http.get<any>('https://swapi.dev/api/people').pipe(map(resData => {
            return resData.results.map((personagem: { name: string; }) => personagem.name);
        })).subscribe(DadoFinal => this.pessoasAlteração.next(DadoFinal));
    }

    addPessoa(name: string) {
        this.persons.push(name)
        this.pessoasAlteração.next(this.persons);
    }

    removePerson(name: string) {
        this.persons = this.persons.filter(person => {
            return person !== name;
        });

        this.pessoasAlteração.next(this.persons);
    }
}