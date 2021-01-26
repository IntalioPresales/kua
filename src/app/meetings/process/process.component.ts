import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown'

@Component({
    selector: 'app-process',
    templateUrl: './process.component.html',
    styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

    @ViewChild('cd', { static: true }) private countdown: CountdownComponent;

    countConfig = {
        leftTime: 300,
        demand: true
    }
    secondsElapsed = 0;
    timeElapsed
    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            this.countdown.begin();
        }, 1000);

        setInterval(() => {
            this.secondsElapsed += 1;
            this.timeElapsed = Math.floor(this.secondsElapsed / 60)
        }, 1000)
    }

    AfterViewInit() {
    }
}
