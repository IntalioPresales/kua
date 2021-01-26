import { DeleteBrandSheetComponent } from './delete-brand.component';
import { BrandsService } from 'app/blocks/services/brands.service';
import { BrandDataSource } from './brands.datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource, MatBottomSheet, MatSnackBar } from '@angular/material';
import { Brand } from 'app/blocks/interface/brand';
import { FormControl } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, tap, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

    // Private
    private _unsubscribeAll: Subject<any>;

    public displayedColumns = ["brand", "action"];
    public pageSizeOptions = [10, 20, 40];
    public noData: any;
    public dataSource = new MatTableDataSource<Brand>([]);
    public filter = new FormControl("");

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

    @ViewChild(MatSort, {static: false}) sort: MatSort;

    constructor(
        public _brandDataSource: BrandDataSource,
        private _brandsService: BrandsService,
        private bottomSheet: MatBottomSheet,
        private snackBar: MatSnackBar,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }


    ngOnInit() {

        this._brandDataSource.loadBrands(1, this.pageSizeOptions[0], "", "brand", false);

        this.noData = this._brandDataSource.connect().pipe(map(data => data.length === 0));

        // @ update table
        this._brandDataSource.connect().subscribe(data => this.dataSource.data = data)
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

                    this.loadBrands();
                })
            )
            .subscribe();

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                tap(() => this.loadBrands())
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

    loadBrands() {
        this._brandDataSource.loadBrands(
            // @ increment bcs sort module starts from 0 , and server expects to start with 1
            this.paginator.pageIndex + 1,
            this.paginator.pageSize,
            this.filter.value,
            this.sort.active,
            this.sort.direction
        );
    }

    deleteBrand(id): void {

        const sheet = this.bottomSheet.open(DeleteBrandSheetComponent);

        sheet.afterDismissed().subscribe((result) => {

            const deleteConfirmed = typeof result !== 'undefined' ? result.deleteConfirmed : false;

            if (deleteConfirmed) {
                this._brandsService
                    .deleteBrand(id)
                    .pipe(
                        takeUntil(this._unsubscribeAll)
                    )
                    .subscribe(
                        (response) => {
                            this.snackBar.open('Product deleted', 'CLOSE', {
                                panelClass: 'm-24',
                                duration: 3000,
                            });
                            this.loadBrands()
                        },
                        (error) => {
                            this.snackBar.open('An error occurred', 'CLOSE', {
                                panelClass: 'm-24',
                                duration: 3000,
                            });
                        })
            }
        });
    }
}
