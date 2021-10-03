import { Component, Output, EventEmitter, Injectable } from "@angular/core";

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    @Output() criarPessoa = new EventEmitter<string>();
    enteredPersonName = '';

    

    onCreatePerson() {
        console.log('Entered Person: ' + this.enteredPersonName);
        this.criarPessoa.emit(this.enteredPersonName);
        this.enteredPersonName = '';
    }
}