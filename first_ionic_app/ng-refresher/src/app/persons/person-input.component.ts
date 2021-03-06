import { PersonService } from './person.service';
import { Component } from "@angular/core";

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    enteredPersonName = '';

    constructor(private personService: PersonService) {}

    onCreatePerson() {
        console.log('Entered Person: ' + this.enteredPersonName);
        this.personService.addPessoa(this.enteredPersonName);
        this.enteredPersonName = '';
    }

}