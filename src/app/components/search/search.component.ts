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
import { HttpResponse } from '@angular/common/http';



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
  linkListFound: Link[];

  namePersonEntered = '';
  firstNameEntered = '';
  uidEntered = '';
  activityIdPersonSelected = 0;
  personListFound: Person[];
  message = '';


  constructor(private linkService: LinkService,
              private linkTypeService: LinkTypeService,
              private activityService: ActivityService,
              private personService: PersonService,
              private router: Router) {

  }

  ngOnInit() {

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
    return this.linkService.getListLinkSearched(this.titleSearchedPatern, this.linkTypeIdSelected, this.activityIdSelected)
      .subscribe(
        (httpResponselinkListFound: HttpResponse<Link[]>) => {
          console.log('this.linkListFound', this.linkListFound);
          switch (httpResponselinkListFound.status) {
            case 200: {
              this.linkListFound = httpResponselinkListFound.body;
              break;
            }
            case 204: {
              this.linkListFound = [];
              break;
            }
            default: {
              this.message = 'Votre demande n\'a pas pu être traitée, pour une raison inconnue. Vous pouvez réessayer.';
              break;
            }
          }
          // reinit the search fields
          this.titleSearchedPatern = '';
          this.linkTypeIdSelected = 0;
          this.activityIdSelected = 0;
        },
        (errorHttpResponseLink: HttpResponse<Link[]>) => {
          if (errorHttpResponseLink.status === 400) {
            // tslint:disable-next-line:max-line-length
            this.message = 'Impossible d\'effectuer la recherche. Merci de vérifier qu\'il n\'y a pas d\'erreur dans les données saisies';
          }
          // reinit the search fields
          this.titleSearchedPatern = '';
          this.linkTypeIdSelected = 0;
          this.activityIdSelected = 0;
        }
      );
  }


  searchPerson() {
    this.personListFound = [];
    this.linkListFound = [];
    // tslint:disable-next-line:max-line-length
    console.log('namePersonEntered =', this.namePersonEntered, 'firstNameEntered=', this.firstNameEntered, 'uidEntered=', this.uidEntered, 'activityIdPersonSelected=', this.activityIdPersonSelected);
    return this.personService.getListPersonSearch
      (this.namePersonEntered, this.firstNameEntered, this.uidEntered, this.activityIdPersonSelected)
      .subscribe(
        (httpResponsePersonListFound: HttpResponse<Person[]>) => {
          console.log('this.personListFound', this.personListFound);
          switch (httpResponsePersonListFound.status) {
            case 200: {
              this.personListFound = httpResponsePersonListFound.body;
              break;
            }
            case 204: {
              this.personListFound = [];
              break;
            }
            default: {
              this.message = 'Votre demande n\'a pas pu être traitée, pour une raison inconnue. Vous pouvez réessayer.';
              break;
            }
          }
          // reinit the search fields
          this.namePersonEntered = '';
          this.firstNameEntered = '';
          this.uidEntered = '';
          this.activityIdPersonSelected = 0;
        },
        (errorHttpResponsePerson: HttpResponse<Link[]>) => {
          if (errorHttpResponsePerson.status === 400) {
            // tslint:disable-next-line:max-line-length
            this.message = 'Impossible d\'effectuer la recherche. Merci de vérifier qu\'il n\'y a pas d\'erreur dans les données saisies';
          }
          // reinit the search fields
          this.namePersonEntered = '';
          this.firstNameEntered = '';
          this.uidEntered = '';
          this.activityIdPersonSelected = 0;
        }
      );
  }
}
