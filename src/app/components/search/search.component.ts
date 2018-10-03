import { Component, OnInit } from '@angular/core';
import { LinkTypeService } from 'src/app/services/link-type.service';
import { LinkType } from 'src/app/interfaces/link-type';
import { LinkService } from 'src/app/services/link.service';
import { Activity } from 'src/app/interfaces/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { Link } from 'src/app/interfaces/link';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  linkTypeList: LinkType[] = [];
  activityList: Activity[] = [];

  titleSearchedPatern = '';
  linkTypeIdSelected = 0;
  activityIdSelected = 0;
  linkListFound: Link[] = [];

  namePersonEntered = '';
  firstNameEntered = '';
  uidEntered = '';
  activityIdPersonSelected = 0;
  personListFound: Person[] = [];


  // tslint:disable-next-line:max-line-length
  constructor(public linkService: LinkService, public linkTypeService: LinkTypeService, public activityService: ActivityService, public personService: PersonService, public router: Router) {

   }

  ngOnInit() {
    this.titleSearchedPatern = '';

    // for dropdowm menu linkType
    this.linkTypeService.getAll().subscribe((linkTypeList: LinkType[]) => {
      this.linkTypeList = linkTypeList;
    });
    // for dropdowm menu activity
    this.activityService.getAll().subscribe((activityList: Activity[]) => {
      this.activityList = activityList;
    });

  }

  searchLink() {
    this.linkListFound = [];
    this.personListFound = [];
    // tslint:disable-next-line:max-line-length
    console.log('titleSearchedPatern = ', this.titleSearchedPatern, 'linkTypeSelected =', this.linkTypeIdSelected, 'activitySelected=', this.activityIdSelected);
    // tslint:disable-next-line:max-line-length
    return this.linkService.getListLinkSearched(this.titleSearchedPatern, this.linkTypeIdSelected, this.activityIdSelected).subscribe((linkListFound: Link[]) => {
    this.linkListFound = linkListFound;
    console.log( 'this.linkListFound', this.linkListFound);
    this.titleSearchedPatern = '';
    this.linkTypeIdSelected = 0;
    this.activityIdSelected = 0;
    });
  }


  searchPerson() {
    this.personListFound = [];
    this.linkListFound = [];
     // tslint:disable-next-line:max-line-length
    console.log('namePersonEntered =', this.namePersonEntered, 'firstNameEntered=', this.firstNameEntered, 'uidEntered=', this.uidEntered, 'activityIdPersonSelected=', this.activityIdPersonSelected);
    return this.personService.getListPersonSearch
    (this.namePersonEntered, this.firstNameEntered, this.uidEntered, this.activityIdPersonSelected)
    .subscribe((personListFound: Person[]) => {
      this.personListFound = personListFound;
      console.log( 'this.personListFound', this.personListFound);
      this.namePersonEntered = '';
      this.firstNameEntered = '';
      this.uidEntered = '';
      this.activityIdPersonSelected = 0;
    });
  }
}
