import { NgModule } from '@angular/core';
import { SubCategorySelectorComponent } from './subCategory-selector.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';

@NgModule({
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
    ],
    declarations: [
        SubCategorySelectorComponent
    ],
    exports: [
        SubCategorySelectorComponent
    ]
})
export class SubCategorySelectorModule { }
