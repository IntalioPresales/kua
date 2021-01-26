import { Client } from './../blocks/interface/client';
import { ClientsService } from './../blocks/services/clients.service';
import { ClientsDataSource } from './clients.datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { MatBottomSheet, MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Brand } from 'app/blocks/interface/brand';
import { FormControl } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    // Private
    private _unsubscribeAll: Subject<any>;

    public displayedColumns = ["name", "mobile", "type", "action"];
    public pageSizeOptions = [10, 20, 40];
    public noData: any;
    public dataSource = new MatTableDataSource<Client>([]);
    public filter = new FormControl("");

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

    @ViewChild(MatSort, {static: false}) sort: MatSort;

    constructor(
        public _clientsDataSource: ClientsDataSource,
        private _clientsService: ClientsService,
        private bottomSheet: MatBottomSheet,
        private snackBar: MatSnackBar,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {

        this._clientsDataSource.loadClients(1, this.pageSizeOptions[0], "", "name", false);

        this.noData = this._clientsDataSource.connect().pipe(map(data => data.length === 0));

        // @ update table
        this._clientsDataSource.connect().subscribe(data => this.dataSource.data = data)
    }


    ngAfterViewInit() {

        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);


        merge(
            this.filter.valueChanges,
        )
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                tap(() => {
                    this.paginator.pageIndex = 0;

                    this.loadClients();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadClients())
            )
            .subscribe();

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    loadClients() {
        this._clientsDataSource.loadClients(
            // @ increment bcs sort module starts from 0 , and server expects to start with 1
            this.paginator.pageIndex + 1,
            this.paginator.pageSize,
            this.filter.value,
            this.sort.active,
            this.sort.direction
        );
    }

}
