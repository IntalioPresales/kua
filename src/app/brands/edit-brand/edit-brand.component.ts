import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { BrandsService } from 'app/blocks/services/brands.service';
import { Brand } from 'app/blocks/interface/brand';
import { AppUtils } from 'app/blocks/utils';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'app-edit-brand',
    templateUrl: './edit-brand.component.html',
    styleUrls: ['./edit-brand.component.scss']
})
export class EditBrandComponent implements OnInit {

    private _unsubscribeAll: Subject<any>;
    public form: FormGroup;
    public errors: any;


    constructor(
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private _router: Router,
        private _brandsService: BrandsService
    ) {
        this._unsubscribeAll = new Subject();

    }

    ngOnInit() {

        this._route.paramMap
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(params => {
                const id = params.get('id');
                if (id)
                    this.loadBrand(id)
            })
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
            .updateBrand(brand)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (brand: Brand) => {
                    this.snackBar.open('Brand updated', 'CLOSE', {
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

    loadBrand(id) {
        this._brandsService
            .getBrandById(id)
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(data => {
                this.setFormVariables(data)
            },
                (error) => {
                    console.error(error)
                    this.snackBar.open('An error occurred', 'CLOSE', {
                        panelClass: 'm-24',
                        duration: 3000,
                    });
                })
    }

    setFormVariables(data: Brand) {

        // Reactive Form
        this.form = this._formBuilder.group({
            brand: [data.brand, Validators.required],
            id: [data.id, Validators.required],
        });
    }

}
