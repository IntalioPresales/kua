import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicroRoutingModule } from './micro-routing.module';
import { MicroComponent } from './micro.component';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { FuseSharedModule } from '@fuse/shared.module';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [MicroComponent, ListComponent],
    imports: [
        SharedMaterialModule,
        FuseSharedModule,
        MicroRoutingModule
    ]
})
export class MicroModule { }
