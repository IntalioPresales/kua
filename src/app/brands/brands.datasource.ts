import { BrandsService } from 'app/blocks/services/brands.service';
import { catchError, finalize, map } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { BrandsModule } from './brands.module';
import { Brand } from 'app/blocks/interface/brand';
import { BehaviorSubject, of, Observable } from 'rxjs';

@Injectable()
export class BrandDataSource {

    private brandSubject = new BehaviorSubject<Brand[]>([]);

    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    private totalSubject = new BehaviorSubject<number>(0);

    public total$ = this.totalSubject.asObservable();

    constructor(private _brandsService: BrandsService) {

    }

    loadBrands(
        page: number,
        limit: number,
        filter: string,
        sortBy: string,
        descending: string | boolean
    ): void {

        this.loadingSubject.next(true);

        this._brandsService.getBrands(page, limit, filter, sortBy, descending)
            .pipe(
                map(data => {
                    this.brandSubject.next(data.data)
                    this.totalSubject.next(data.meta['total'])
                }),
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe();

    }

    connect(): Observable<Brand[]> {
        console.log("Connecting data source");
        return this.brandSubject.asObservable();
    }

    disconnect(): void {
        this.brandSubject.complete();
        this.loadingSubject.complete();
    }

}