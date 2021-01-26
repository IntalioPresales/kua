import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { Brand } from 'app/blocks/interface/brand';
import { MatSelect } from '@angular/material';
import { BrandsService } from 'app/blocks/services/brands.service';
import { take, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-brand-selector',
    templateUrl: './brand-selector.component.html',
    styleUrls: ['./brand-selector.component.scss']
})
export class BrandSelectorComponent implements OnInit {

    // Private
    private _unsubscribeAll: Subject<any>;

    public brands: any;
    public brandCtrl: FormControl = new FormControl();
    /** control for the MatSelect filter keyword */
    public brandFilterCtrl: FormControl = new FormControl();
    /** list of Brand filtered by search keyword */
    public filteredBrands: ReplaySubject<Brand[]> = new ReplaySubject<Brand[]>(1);
    @ViewChild('brandSelect', {static: false}) brandSelect: MatSelect;

    @Output() notify: EventEmitter<any> = new EventEmitter<any>();

    @Input() set value(value) {
        
        this.brandCtrl.setValue(value)

        // @ init for mat select search
        setTimeout(() => this.setBrandsInitialValue())

    }

    get value() {
        return this.brandCtrl.value
    }

    constructor(
        private _brandsService: BrandsService,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngAfterViewInit() {
        // @ init for mat select search
        setTimeout(() => this.setBrandsInitialValue())
    }


    ngOnInit() {

        // @ get brands and load select 
        this._brandsService
            .getBrands(1, 1000, "", "brand", false)
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(brands => {

                this.brands = brands.data
                // set initial selection
                // this.brandCtrl.setValue(this.brands[1]);
                // load the initial bank list
                this.filteredBrands.next(this.brands.slice());
            })

        // listen for search field value changes
        this.brandFilterCtrl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.filterBrands();
            });


        // @ whenever the the brand is selected update form brand_id
        this.brandCtrl
            .valueChanges
            .subscribe(brand => this.notify.emit(brand.id))
    }


    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    protected setBrandsInitialValue() {
        this.filteredBrands
            .pipe(
                take(1),
                takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.brandSelect.compareWith = (a: Brand, b: any) => a && b && a.id === b;
            });
    }


    private filterBrands() {
        if (!this.brands) {
            return;
        }
        // get the search keyword
        let search = this.brandFilterCtrl.value;
        if (!search) {
            this.filteredBrands.next(this.brands.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredBrands.next(
            this.brands.filter(o => o.brand.toLowerCase().indexOf(search) > -1)
        );
    }

}
