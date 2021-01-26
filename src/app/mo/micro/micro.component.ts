import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-micro',
    templateUrl: './micro.component.html',
    styleUrls: ['./micro.component.scss']
})
export class MicroComponent implements OnInit {

    @Output() onBackChange: EventEmitter<boolean> = new EventEmitter()
    constructor() { }

    ngOnInit() {
    }

    onBack(){
        this.onBackChange.emit(true)
    }

}
