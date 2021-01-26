import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPaginateInfo } from './products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    private backendUrl: string = environment.backendUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    getOrders(
        page: number,
        limit?: number,
        sortBy: string = "",
        descending: string | boolean = false,
        status?: string,
        filterCustomer: string = '',
        id: string = '',
        createdAt: string = '',
        dueDate: string = '',

    ): Observable<IPaginateInfo<any>> {

        if (typeof descending == 'string' || !descending) descending = descending == "desc" ? true : false;

        return this.httpClient.get<IPaginateInfo<any>>(`${this.backendUrl}/api/orders`, {

            // @ http params doesn't accept boolean
            // @ server should parse 
            params: new HttpParams()
                .set('page', page.toString())
                .set('limit', limit.toString())
                .set('sortBy', sortBy)
                .set('descending', descending.toString())
                .set('filterCustomer', filterCustomer)
                .set('idFilter', id)
                .set('createdAt', createdAt)
                .set('dueDate', dueDate)
                .set('status', status)
        })
    }


    updateStatus(id, status) {
        return this.httpClient.put<any>(`${this.backendUrl}/api/orders/${id}/updateStatus`, { status })
            .pipe(
                map((data: any) => data.data)
            );
    }
}
