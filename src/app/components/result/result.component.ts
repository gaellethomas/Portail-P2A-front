import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input('linkListFound') linkListFound: Link[];
  @Input('personListFound') personListFound: Person[];


  constructor() { }

  ngOnInit() {
}
  }

