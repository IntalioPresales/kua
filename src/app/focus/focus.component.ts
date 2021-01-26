import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle } from '@angular/cdk/drag-drop';


@Component({
    selector: 'app-focus',
    templateUrl: './focus.component.html',
    styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements OnInit {

    constructor() { }

    achievedPercentage = 0
    AllCount = 0
    completedCount = 0

    @ViewChild('table', { static: true }) table: MatTable<Element>;
    displayedColumns = ['position', 'rocks', 'quarter', 'who', 'completed'];
    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    dataSource = ELEMENT_DATA;

    ngOnInit() {
        this.calculateAchievedPercentage()
    }

    onCompletetChange(event, id) {
        let value = event.checked;
        let index = this.dataSource.findIndex(obj => obj.id == id);
        this.dataSource[index].completed = value;
        this.calculateAchievedPercentage();
    }

    dropTable(event: CdkDragDrop<any[]>) {
        const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
        moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
        this.table.renderRows();
    }

    // ------------------------------------------------------
    // Private methods
    // ------------------------------------------------------

    calculateAchievedPercentage() {
        let completed = this.dataSource.filter(obj => obj.completed == true);
        this.completedCount = completed.length
        this.AllCount = this.dataSource.length
        this.achievedPercentage = (this.completedCount * 100) / this.AllCount
    }
}

export interface Element {
    position: number;
    rocks: string;
    id: string;
    quarter: string;
    who: string;
    completed: boolean;
}

const ELEMENT_DATA: Element[] = [
    { id: "1", position: 1, completed: true, rocks: 'Product ideas.', quarter: '', who: 'John' },
    { id: "2", position: 2, completed: true, rocks: 'Technological needs.', quarter: '', who: 'Steve' },
    { id: "3", position: 3, completed: false, rocks: 'Close 10 new client accounts.', quarter: '', who: 'Sarah' },
    { id: "4", position: 4, completed: false, rocks: 'Open 25 new client accounts.', quarter: '', who: 'Sarah' }
];
