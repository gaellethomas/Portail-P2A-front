import { Component, OnInit } from '@angular/core';
import { LinkTypeService } from 'src/app/services/link-type.service';
import { LinkType } from 'src/app/interfaces/link-type';
import { LinkService } from 'src/app/services/link.service';
import { Activity } from 'src/app/interfaces/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { Link } from 'src/app/interfaces/link';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  linkTypeList: LinkType[] = [];
  activityList: Activity[] = [];

  public titleSearchedPatern = '';
  public linkTypeIdSelected = 0;
  public activityIdSelected = 0;
  linkListFound: Link[] = [];

  namePersonEntered = '';
  firstNameEntered = '';
  uidEntered = '';
  activityPersonSelected: Activity = null;



  constructor(public linkService: LinkService, public linkTypeService: LinkTypeService, public activityService: ActivityService) {

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
  // tslint:disable-next-line:max-line-length
  console.log('titleSearchedPatern = ', this.titleSearchedPatern, 'linkTypeSelected =', this.linkTypeIdSelected, 'activitySelected=', this.activityIdSelected);
// tslint:disable-next-line:max-line-length
return this.linkService.getListLinkSearched(this.titleSearchedPatern, this.linkTypeIdSelected, this.activityIdSelected).subscribe((linkListFound: Link[]) => {
this.linkListFound = linkListFound;
console.log( 'this.linkListFound', this.linkListFound);
});

}

searchPerson() {
// return this.linkService.
}

}
