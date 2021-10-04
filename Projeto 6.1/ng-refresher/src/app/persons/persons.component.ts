import { PersonService } from './person.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
    personList!: string[];

    private personListSubs!: Subscription;

    constructor(private prsService: PersonService) {}

    ngOnInit() {
        this.personList = this.prsService.persons;
        this.personListSubs = this.prsService.pessoasAlteração.subscribe((persons => {
            this.personList = persons;
        }));
    }

    onRemovePerson(personName: string) {
        this.prsService.removePerson(personName);
    }

    ngOnDestroy() {
        this.personListSubs.unsubscribe();
    }
}