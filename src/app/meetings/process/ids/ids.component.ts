import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-ids',
    templateUrl: './ids.component.html',
    styleUrls: ['./ids.component.scss']
})
export class IdsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    inprogress = [
        'Cash balanace',
        'late projects',
    ];

    done = [
        'New Leads',
        'Project over budget',
        'Billing errors'
    ];

    log() {
    }

    onQuarterlyIssueCheckboxChange(e) {
        if (e.checked) {
            this.done.unshift('Cash balanace')
        } else {
            this.done = this.done.filter(s => s != 'Cash balanace')
            this.inprogress = this.inprogress.filter(s => s != 'Cash balanace')
        }
    }

    onWeeklyIssueCheckboxChange(e) {
        if (e.checked) {
            this.done.unshift('New Leads')
        } else {
            this.done = this.done.filter(s => s != 'New Leads')
            this.inprogress = this.inprogress.filter(s => s != 'New Leads')
        }
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }



}
