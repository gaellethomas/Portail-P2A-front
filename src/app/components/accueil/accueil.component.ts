import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/interfaces/activity';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  activityList: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getAll().subscribe(
      (activityList: Activity[]) => {
       this.activityList = activityList;
   });
  }

}
