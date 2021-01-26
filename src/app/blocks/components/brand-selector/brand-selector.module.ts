import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandSelectorComponent } from './brand-selector.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';

@NgModule({
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
    ],
    declarations: [
        BrandSelectorComponent
    ],
    exports: [
        BrandSelectorComponent
    ]
})
export class BrandSelectorModule { }
