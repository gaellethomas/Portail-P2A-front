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

  // close auto menu in reponsive mode
  closeAutoButtonMenu() {
    document.getElementById('button-menu').setAttribute('aria-expanded', 'false');
    // document.getElementById('button-menu').setAttribute('class', 'navbar-toggle collapsed');
    document.getElementById('bs-example-navbar-collapse-1').setAttribute('class', 'collapse navbar-collapse');
    // document.getElementById('bs-example-navbar-collapse-1').setAttribute('aria-expanded', 'false');
    // document.getElementById('bs-example-navbar-collapse-1').style.height = '1px';
  }

}
