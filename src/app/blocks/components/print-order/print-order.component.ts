import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-print-order',
    templateUrl: './print-order.component.html',
    styleUrls: ['./print-order.component.scss']
})
export class PrintOrderComponent implements OnInit {

    @ViewChild('button', {static: false}) button;

    private readonly _onClose = new Subject<any>();
    // @ service will watch onClose to detachView
    public onClose = this._onClose.asObservable();

    public order: any = {}

    constructor() { }

    ngOnInit() {

        // @ trigger button to print
        setTimeout(() => {
            this.button.nativeElement.click();
        }, 200);

        // @ 
        setTimeout(() => {
            this._onClose.next()
        }, 2000);
    }

}
