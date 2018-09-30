import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/interfaces/activity';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

activityList: Activity[];

  constructor() { }

  ngOnInit() {
  }

}
