import { Brand } from './../interface/brand';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPaginateInfo } from './products.service';

@Injectable({
    providedIn: 'root'
})
export class BrandsService {

    private backendUrl: string = environment.backendUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    getBrands(
        page: number,
        limit?: number,
        filter?: string,
        sortBy?: string,
        descending: string | boolean = false,

    ): Observable<IPaginateInfo<Brand>> {

        if (typeof descending == 'string' || !descending) descending = descending == "desc" ? true : false;

        return this.httpClient.get<IPaginateInfo<Brand>>(`${this.backendUrl}/api/brands`, {

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

    createBrand(brand) {
        return this.httpClient.post<Brand>(`${this.backendUrl}/api/brands`, brand)
            .pipe(map((data: any) => data.data));
    }

    updateBrand(brand) {
        return this.httpClient.put<Brand>(`${this.backendUrl}/api/brands/${brand.id}`, brand)
            .pipe(map((data: any) => data.data));
    }

    getBrandById(id) {
        return this.httpClient.get<Brand>(`${this.backendUrl}/api/brands/${id}`)
            .pipe(map((data: any) => data.data));
    }

    deleteBrand(id) {
        return this.httpClient.delete(`${this.backendUrl}/api/brands/${id}`)
    }
}
