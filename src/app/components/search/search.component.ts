import { Component, OnInit } from '@angular/core';
import { LinkTypeService } from 'src/app/services/link-type.service';
import { LinkType } from 'src/app/interfaces/link-type';
import { LinkService } from 'src/app/services/link.service';
import { Activity } from 'src/app/interfaces/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  linkTypeList: LinkType[] = [];
  activityList: Activity[] = [];
  partLinkNameSearched = '';

  constructor(public linkService: LinkService, public linkTypeService: LinkTypeService, public activityService: ActivityService) {

   }

  ngOnInit() {

    this.linkTypeService.getAll().subscribe((linkTypeList: LinkType[]) => {
      this.linkTypeList = linkTypeList;
    });

    this.activityService.getAll().subscribe((activityList: Activity[]) => {
      this.activityList = activityList;
    });


  }

}
