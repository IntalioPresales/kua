import { Client } from './../interface/client';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPaginateInfo } from './products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ClientsService {

    private backendUrl: string = environment.backendUrl;


    constructor(
        private httpClient: HttpClient
    ) { }

    getClients(
        page: number,
        limit?: number,
        filter?: string,
        sortBy?: string,
        descending: string | boolean = false,

    ): Observable<IPaginateInfo<Client>> {

        if (typeof descending == 'string' || !descending) descending = descending == "desc" ? true : false;

        return this.httpClient.get<IPaginateInfo<Client>>(`${this.backendUrl}/api/customers`, {

            // @ http params doesn't accept boolean
            // @ server should parse 
            params: new HttpParams()
                .set('page', page.toString())
                .set('limit', limit.toString())
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('descending', descending.toString())
        })
    }

    getById(id): Observable<Client> {
        return this.httpClient.get<Client>(`${this.backendUrl}/api/customers/${id}`)
            .pipe(
                map((data: any) => data.data)
            );
    }

    createCustomer(customer) {
        return this.httpClient.post<Client>(`${this.backendUrl}/api/customers`, customer)
            .pipe(
                map((data: any) => data.data)
            );
    }

    updateCustomer(customer) {
        return this.httpClient.put<Client>(`${this.backendUrl}/api/customers/${customer.id}`, customer)
            .pipe(
                map((data: any) => data.data)
            );
    }


    deleteCustomer(id) {
        return this.httpClient.delete(`${this.backendUrl}/api/customers/${id}`)
    }
}
