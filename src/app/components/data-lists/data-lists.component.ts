import { Component, OnInit } from '@angular/core';
import { LinkType } from 'src/app/interfaces/link-type';
import { ActivatedRoute } from '@angular/router';
import { LinkTypeService } from 'src/app/services/link-type.service';


@Component({
  selector: 'app-data-lists',
  templateUrl: './data-lists.component.html',
  styleUrls: ['./data-lists.component.css']
})
export class DataListsComponent implements OnInit {

  activityName = '';
  activityIdCurrent: number;
  linkTypeList: LinkType[] = [];

  constructor(public route: ActivatedRoute,
    public linkTypeService: LinkTypeService) {

    this.route.params.subscribe((params) => {

      if (params.hasOwnProperty('activityName')) {
        this.activityName = params['activityName'];
        switch (this.activityName) {
          case 'commun': { this.activityIdCurrent = 1; break; }
          case 'blueprism': { this.activityIdCurrent = 2; break; }
          case 'contextor': { this.activityIdCurrent = 3; break; }
          case 'web': { this.activityIdCurrent = 4; break; }
          case 'autres-assets': { this.activityIdCurrent = 5; break; }
          case 'suivi-de-production': { this.activityIdCurrent = 6; break; }
          default: { this.activityIdCurrent = 1; break; }
        }
        this.linkTypeService.getByActivity(this.activityIdCurrent).subscribe((linkTypeList: LinkType[]) => {
          this.linkTypeList = linkTypeList;
        });
      }
    });
  }

  ngOnInit() {

  }
}
