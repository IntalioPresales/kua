import { DeleteBrandSheetComponent } from './delete-brand.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { BrandDataSource } from './brands.datasource';
import { BrandsRoutingModule } from './brands-routing.module';
import { NewBrandComponent } from './new-brand/new-brand.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';

@NgModule({
    imports: [
        BrandsRoutingModule,
        FuseSharedModule,
        SharedMaterialModule,
    ],
    declarations: [
        BrandsComponent,
        NewBrandComponent,
        EditBrandComponent,
        DeleteBrandSheetComponent
    ],
    providers: [
        BrandDataSource
    ],
    entryComponents: [
        DeleteBrandSheetComponent
    ]
})
export class BrandsModule { }
