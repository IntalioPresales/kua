import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
    acc: string;
    name: string;
    measure: string;
    goal: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-score-card',
    templateUrl: './score-card.component.html',
    styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

    displayedColumns = ['name', 'chart', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
    dataSource = ELEMENT_DATA;
    constructor() { }


    view: any[] = [30, 130];
    legend: boolean = false;
    showLabels: boolean = false;
    animations: boolean = false;
    xAxis: boolean = false;
    yAxis: boolean = false;
    showYAxisLabel: boolean = false;
    showXAxisLabel: boolean = false;
    xAxisLabel: string = 'Year';
    yAxisLabel: string = 'Population';
    timeline: boolean = false;

    colorScheme = {
        domain: ['#42BFF7']
    };

    multi = [
        {
            "name": "Numbers",
            "series": [
                {
                    "name": "1",
                    "value": 2
                },
                {
                    "name": "2",
                    "value": 3
                },
                {
                    "name": "4",
                    "value": 3
                },
                {
                    "name": "5",
                    "value": 2
                },
                {
                    "name": "6",
                    "value": 3
                },
                {
                    "name": "7",
                    "value": 3
                },
                {
                    "name": "8",
                    "value": 4
                },
                {
                    "name": "9",
                    "value": 5
                },
                {
                    "name": "10",
                    "value": 5
                },
                {
                    "name": "11",
                    "value": 6
                },
                {
                    "name": "12",
                    "value": 5
                },
                {
                    "name": "13",
                    "value": 4
                }
            ]
        }
    ]

    ngOnInit() {
    }

}


const ELEMENT_DATA: PeriodicElement[] = [
    { acc: "Mike", position: 1, measure: ">", goal: "28", name: 'New Leads', weight: 1.0079, symbol: '2', },
    { acc: "Sally", position: 2, measure: ">", goal: "$1 M", name: '30 day pipeline', weight: 4.0026, symbol: '30' },
    { acc: "Pam", position: 3, measure: ">", goal: "0", name: 'Lost customers', weight: 6.941, symbol: '20' },
    { acc: "Nick", position: 4, measure: ">", goal: "1", name: 'Project over budget', weight: 9.0122, symbol: '305' },
    { acc: "Ted", position: 4, measure: ">", goal: "80%", name: 'utilization rate', weight: 9.0122, symbol: '305' },
    { acc: "Paul", position: 4, measure: ">", goal: "500K", name: 'Cash balance', weight: 9.0122, symbol: '305' },
];
