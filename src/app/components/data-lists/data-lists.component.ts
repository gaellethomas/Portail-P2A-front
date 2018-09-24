import { Component, OnInit } from '@angular/core';
import { Access } from '../../interfaces/access';
import { Person } from '../../interfaces/person';
import { AccessService } from '../../services/access.service';
import { AccessType } from 'src/app/interfaces/access-type';

@Component({
  selector: 'app-data-lists',
  templateUrl: './data-lists.component.html',
  styleUrls: ['./data-lists.component.css']
})
export class DataListsComponent implements OnInit {

  linkAccessList: Access[] = [];
  processAccessList: Access[] = [];
  personList: Person[] = [];
  accessTypeLink: AccessType;
  accessTypeProcess: AccessType;

  constructor(public accessService: AccessService) { }

  ngOnInit() {
    this.accessService.getAllByAccessType(this.accessTypeLink).subscribe((accessList: Access[]) => {
    this.linkAccessList = accessList;
    });
  }
}
