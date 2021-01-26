import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-conclude',
    templateUrl: './conclude.component.html',
    styleUrls: ['./conclude.component.scss']
})
export class ConcludeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    persons = [
        "Mazen Farah",
        "George Staham",
        "William Smith"
    ]

    inprogress = [
        'Cash balanace',
        'late projects',
        'Project over budget',
        'Billing errors'
    ];
}
