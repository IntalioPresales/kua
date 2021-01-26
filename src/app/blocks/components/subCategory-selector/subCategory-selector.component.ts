import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { SubCategory } from 'app/blocks/interface/subCategory';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material';
import { SubCategoriesService } from 'app/blocks/services/subCategories.service';
import { takeUntil, take } from 'rxjs/operators';

@Component({
    selector: 'app-subCategory-selector',
    templateUrl: './subCategory-selector.component.html',
    styleUrls: ['./subCategory-selector.component.scss']
})
export class SubCategorySelectorComponent implements OnInit {

    // Private
    private _unsubscribeAll: Subject<any>;

    public categories: SubCategory[];

    public categoryCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword */
    public categoryFilterCtrl: FormControl = new FormControl();

    /** list of cat filtered by search keyword */
    public filteredCategories: ReplaySubject<SubCategory[]> = new ReplaySubject<SubCategory[]>(1);

    @ViewChild('categorySelect', {static: false}) categorySelect: MatSelect;

    @Output() notify: EventEmitter<any> = new EventEmitter<any>();

    @Input() set value(value) {

        this.categoryCtrl.setValue(value)

        // @ init for mat select search
        setTimeout(() => this.setCategoriesInitialValue())
    }

    get value() {
        return this.categoryCtrl.value
    }


    constructor(
        private _categoriesService: SubCategoriesService,
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngAfterViewInit() {
        // @ init for mat select search
        setTimeout(() => this.setCategoriesInitialValue())
    }


    ngOnInit() {


        // @ get categories and load select 
        this._categoriesService
            .getAllSubCategories()
            .subscribe(categories => {

                this.categories = categories
                // set initial selection
                // this.categoryCtrl.setValue(this.categories[1]);
                // load the initial bank list
                this.filteredCategories.next(this.categories.slice());
            })

        // listen for search field value changes
        this.categoryFilterCtrl.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.filterCategories();
            });

        this.categoryCtrl
            .valueChanges
            .subscribe(category => this.notify.emit(category.id))
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    protected setCategoriesInitialValue() {
        this.filteredCategories
            .pipe(
                take(1),
                takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.categorySelect.compareWith = (a: SubCategory, b: any) => {
                    return a && b && a.id === b
                };
            });
    }

    private filterCategories() {
        if (!this.categories) {
            return;
        }
        // get the search keyword
        let search = this.categoryFilterCtrl.value;
        if (!search) {
            this.filteredCategories.next(this.categories.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredCategories.next(
            this.categories.filter((o) => o.subCategory.toLowerCase().indexOf(search) > -1)
        );
    }


}
