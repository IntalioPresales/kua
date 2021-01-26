import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    currentView = "list"
    constructor() { }

    ngOnInit() {
    }
    onBackChange(e) {
        if (e)
            this.currentView = "list"
    }

}
