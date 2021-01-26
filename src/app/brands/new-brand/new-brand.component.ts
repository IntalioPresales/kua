import { BrandsService } from './../../blocks/services/brands.service';
import { Brand } from 'app/blocks/interface/brand';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppUtils } from 'app/blocks/utils';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
    selector: 'app-new-brand',
    templateUrl: './new-brand.component.html',
    styleUrls: ['./new-brand.component.scss']
})
export class NewBrandComponent implements OnInit {

    // Private
    private _unsubscribeAll: Subject<any>;

    public form: FormGroup;
    errors: any;


    constructor(
        private _formBuilder: FormBuilder,
        private _brandsService: BrandsService,
        private snackBar: MatSnackBar,
        private _router: Router,

    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Reactive Form
        this.form = this._formBuilder.group({
            brand: ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------- 

    save() {

        // @ validate and show UI errors
        let isValidForm = AppUtils.validateGroupForm(this.form, true)
        if (!isValidForm) return

        let brand_ = Object.assign({}, this.form.value)

        let brand: Brand = brand_

        this._brandsService
            .createBrand(brand)
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(
                (brand: Brand) => {
                    this.snackBar.open('Brand created', 'CLOSE', {
                        panelClass: 'm-24',
                        duration: 3000,
                    });
                    this._router.navigate(['/brands'])
                },
                (error) => {
                    if (error.errors) {
                        this.snackBar.open('An error occurred', 'CLOSE', {
                            panelClass: 'm-24',
                            duration: 3000,
                        });

                        this.errors = _.values(error.errors)

                    }
                }
            )
    }
}
