import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { FuseSharedModule } from './../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacroRoutingModule } from './macro-routing.module';
import { MacroComponent } from './macro.component';

@NgModule({
    declarations: [MacroComponent],
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
        MacroRoutingModule
    ]
})
export class MacroModule { }
