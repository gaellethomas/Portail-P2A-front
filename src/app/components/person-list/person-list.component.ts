import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input('activityId') activityId: number;
  membersP2aList: Person[] = [];
  contactList: Person[] = [];

  constructor(public personService: PersonService) {

  }

  ngOnInit() {
// search persons who belong team P2A and participate in this activity
this.personService.getListByP2aAndActivityId(true, this.activityId).subscribe((membersP2aList: Person[]) => {
    this.membersP2aList = membersP2aList;
    });

// search persons who not belong team P2A and participate in this activity
this.personService.getListByP2aAndActivityId(false, this.activityId).subscribe((contactList: Person[]) => {
  this.contactList = contactList;
  console.log('contactList', this.contactList.length, 'membersP2aList', this.membersP2aList.length);
});
  }

}
