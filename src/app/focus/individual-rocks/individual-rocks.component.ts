import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-individual-rocks',
    templateUrl: './individual-rocks.component.html',
    styleUrls: ['./individual-rocks.component.scss']
})
export class IndividualRocksComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    movies = [
        "Increase qualified proposals outstanding",
        "Implement new electronic shipping system",
        "Direct executive outreach to top clients",
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
