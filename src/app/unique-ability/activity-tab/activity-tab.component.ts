import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-tab',
  templateUrl: './activity-tab.component.html',
  styleUrls: ['./activity-tab.component.scss']
})
export class ActivityTabComponent implements OnInit {

    displayedColumns: string[] = ['activity', 'benefit', 'specific_action', 'deadline'];
    dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
    activity: string;
    benefit: string;
    specific_action: string;
    deadline: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {benefit: "Value 1", activity: 'Activity 1', specific_action: "Value 1", deadline: '09-02-2019'},
    {benefit: "Value 2", activity: 'Activity 2', specific_action: "Value 2", deadline: '03-03-2019'},
    {benefit: "Value 3", activity: 'Activity 3', specific_action: "Value 3", deadline: '03-06-2020'},
  ];
