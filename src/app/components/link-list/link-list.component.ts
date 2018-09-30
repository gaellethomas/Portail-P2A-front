import { Component, OnInit, Input } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { Link } from 'src/app/interfaces/link';


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  @Input('activityId') activityId: number;
  @Input('linkTypeId') linkTypeId: number;
  @Input('linkTypeName') linkTypeName: string;

  linkList: Link[] = [];

  constructor(public linkService: LinkService) { }

  ngOnInit() {

      this.linkService.getListByLinkTypeIdAndActivityId(this.linkTypeId, this.activityId).subscribe((linkList: Link[]) => {
        this.linkList = linkList;
      });
    }
}

