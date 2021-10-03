import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PersonService {
    persons: string[] = ['Max', 'Manuel', 'Anna'];

    addPessoa(name: string) {
        this.persons.push(name)
    }
}