import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PersonService {
    pessoasAlteração = new Subject<string[]>();

    persons!: string[];

    constructor(private http: HttpClient) {};

    fetchPersons() {
        this.http.get<any>('https://swapi.dev/api/people').subscribe(resData => console.log(resData));
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