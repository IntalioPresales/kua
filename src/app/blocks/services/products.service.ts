import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Product } from '../interface/product';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface IPaginateInfo<T> {
    meta: string[];
    links: string[]
    data: T[]
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private backendUrl: string = environment.backendUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    getProducts(
        page: number,
        limit: number,
        filter: string,
        sortBy: string,
        descending: string | boolean,
        brandId: string,
        categoryId: string,
        speciaItems: boolean,
        wholeSalePrice: boolean,
        offered: boolean): Observable<IPaginateInfo<Product>> {

        if (typeof descending == 'string') descending = descending == "desc" ? true : false;

        return this.httpClient.get<IPaginateInfo<Product>>(`${this.backendUrl}/api/products`, {

            // @ http params doesn't accept boolean
            // @ server should parse 
            params: new HttpParams()
                .set('page', page.toString())
                .set('limit', limit.toString())
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('brandId', brandId)
                .set('categoryId', categoryId)
                .set('descending', descending.toString())
                .set('speciaItems', speciaItems.toString())
                .set('wholeSalePrice', wholeSalePrice.toString())
                .set('offered', offered.toString())
        })
    }

    createProduct(product) {
        return this.httpClient.post<Product>(`${this.backendUrl}/api/products`, product)
            .pipe(
                map((data: any) => data.data)
            );
    }

    updateProduct(product) {
        return this.httpClient.put<Product>(`${this.backendUrl}/api/products/${product.id}`, product)
            .pipe(
                map((data: any) => data.data)
            );
    }

    getProductById(id) {
        return this.httpClient.get<Product>(`${this.backendUrl}/api/products/${id}`)
            .pipe(
                map((data: any) => data.data)
            );
    }


    uploadImages(formData: FormData, productId): Observable<HttpEvent<Object>> {
        return this.httpClient
            .post(`${this.backendUrl}/api/products/${productId}/images`, formData, {
                reportProgress: true,
                observe: 'events',
            })
    }
    
    deleteImage(id) {
        return this.httpClient.delete(`${this.backendUrl}/api/images/${id}`)
    }

    deleteProduct(id) {
        return this.httpClient.delete(`${this.backendUrl}/api/products/${id}`)
    }


}
