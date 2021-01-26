import { ClientsService } from './../blocks/services/clients.service';
import { Client } from './../blocks/interface/client';
import { catchError, finalize, map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';

@Injectable()
export class ClientsDataSource {

    private clientsSubject = new BehaviorSubject<Client[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    private totalSubject = new BehaviorSubject<number>(0);

    public total$ = this.totalSubject.asObservable();

    constructor(private _clientsService: ClientsService) {

    }

    loadClients(
        page: number,
        limit: number,
        filter: string,
        sortBy: string,
        descending: string | boolean
    ): void {

        this.loadingSubject.next(true);

        this._clientsService.getClients(page, limit, filter, sortBy, descending)
            .pipe(
                map(data => {
                    this.clientsSubject.next(data.data)
                    this.totalSubject.next(data.meta['total'])
                }),
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe();

    }

    connect(): Observable<Client[]> {
        console.log("Connecting data source");
        return this.clientsSubject.asObservable();
    }

    disconnect(): void {
        this.clientsSubject.complete();
        this.loadingSubject.complete();
    }

}