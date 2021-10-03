import { PersonService } from './person.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
    personList!: string[];
    inputPerson!: any;

    constructor(private prsService: PersonService) {}

    ngOnInit() {
        this.personList = this.prsService.persons;
    }
}