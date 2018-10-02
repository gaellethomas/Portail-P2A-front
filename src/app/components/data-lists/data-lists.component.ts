import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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


  constructor(private route: ActivatedRoute,
              private linkTypeService: LinkTypeService) {

    this.route.params.subscribe((params) => {

        if (params.hasOwnProperty('activityName')) {
          this.activityName = params['activityName'];
          this.activityIdCurrent = this.activityNameToNumber(this.activityName);
          console.log('DATAS LIST COMPONENT : this.activityId = ', this.activityIdCurrent);

          this.linkTypeService.getByActivity(this.activityIdCurrent).subscribe(
             (linkTypeList: LinkType[]) => {
              this.linkTypeList = linkTypeList;
          });
        }
      });
  }


  ngOnInit() {  }



  private activityNameToNumber( activityName: string): number {
    let result: number = null;

    switch (activityName) {
      case 'commun': { result = 1; break; }
      case 'blueprism': { result = 2; break; }
      case 'contextor': { result = 3; break; }
      case 'web': { result = 4; break; }
      case 'autres-assets': { result = 5; break; }
      case 'suivi-de-production': { result = 6; break; }
      default: { result = 1; break; }
    }
    return result;
  }
}
