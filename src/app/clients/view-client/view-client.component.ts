import { Client } from './../../blocks/interface/client';
import { ClientsService } from './../../blocks/services/clients.service';
import { Component, OnInit } from '@angular/core';
import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Subject, merge } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CustomerTypeEnum } from 'app/blocks/enum/costomerType';
import * as _ from 'lodash';
@Component({
    selector: 'app-view-client',
    templateUrl: './view-client.component.html',
    styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

    // Private
    private _unsubscribeAll: Subject<any>;

    public client: Client = {};
    public customerTypeEnum = _.values(CustomerTypeEnum)

    constructor(
        private _clientsService: ClientsService,
        private _route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private _router: Router,
    ) {

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {

        this._route.paramMap
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(params => {
                const id = params.get('id');
                if (id)
                    this.loadClient(id)
            })
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    loadClient(id) {

        this._clientsService
            .getById(id)
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(data => {
                this.client = data
            })
    }

    save() {
        this._clientsService
            .updateCustomer(this.client)
            .pipe(
                takeUntil(this._unsubscribeAll)
            ).subscribe(
                (data) => {
                    console.log(data)

                    this.snackBar.open('An error Occurred', 'CLOSE', {
                        panelClass: 'm-24',
                        duration: 4000,
                    });

                    this._router.navigate(['/clients']);
                },
                (error) => {

                    this.snackBar.open('An error occurred while updating', 'CLOSE', {
                        panelClass: 'm-24',
                        duration: 4000,
                    });
                    this._router.navigate(['/clients']);
                })
    }
}
