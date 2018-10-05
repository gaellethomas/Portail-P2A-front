import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnChanges {

  @Input('linkListFound') linkListFound: Link[];
  @Input('personListFound') personListFound: Person[];
  expanded = false;

  constructor() { }

  ngOnChanges() {
    console.log('linkList de result component CHANGE', this.linkListFound);
    console.log('personListFound de result component CHANGE', this.personListFound);
  }

  ngOnInit() {
    console.log('linkList de result component INIT', this.linkListFound);
    console.log('personListFound de result component INIT', this.personListFound);
  }
}

