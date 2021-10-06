import { PersonService } from './person.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
    personList!: string[];
    isFetching = false;

    private personListSubs!: Subscription;

    constructor(private prsService: PersonService) {}

    ngOnInit() {
        this.personListSubs = this.prsService.pessoasAlteração.subscribe((persons => {
            this.personList = persons;
            this.isFetching = false;
        }));
        this.isFetching = true;
        this.prsService.fetchPersons()
    }

    onRemovePerson(personName: string) {
        this.prsService.removePerson(personName);
    }

    ngOnDestroy() {
        this.personListSubs.unsubscribe();
    }
}