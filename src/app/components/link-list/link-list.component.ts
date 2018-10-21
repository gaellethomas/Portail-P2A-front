import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { Link } from 'src/app/interfaces/link';


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnChanges {

  @Input('activityId') activityId: number;
  @Input('linkTypeId') linkTypeId: number;
  @Input('linkTypeName') linkTypeName: string;

  linkList: Link[] = [];

  constructor(public linkService: LinkService) { }

  ngOnInit() {}

  ngOnChanges() {
    console.log('LINK LIST COMPONENT : this.activityId = ', this.activityId);

      this.linkService.getListByLinkTypeIdAndActivityId(this.linkTypeId, this.activityId).subscribe((linkList: Link[]) => {
        this.linkList = linkList;
        console.log('Retour back this.linkList', this.linkList);
      },
       (error) => {
         // 302= pas de resultat le back renvoi un tableau vide
        if (error.status !== 302) {
        console.log('Le back a renvoyé une erreur !', error);
        }
      }
    );
  }
}

