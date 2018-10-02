import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnChanges {

  @Input('activityId') activityId: number;
  @Input('belongP2a') belongP2a: boolean;
  personList: Person[] = [];

  constructor(public personService: PersonService) {
  }

  ngOnInit() { }

  ngOnChanges() {

    // search persons in function belong team P2A or not, and by activity
    this.personService.getListByP2aAndActivityId(this.belongP2a, this.activityId).subscribe(
      (personList: Person[]) => {
        this.personList = personList;
        console.log('Retour back this.personList', this.personList);
      },
      (error) => {
        console.log('Le back a renvoyé une erreur !', error);
      }
    );
  }
}
