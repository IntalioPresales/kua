import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusRoutingModule } from './focus-routing.module';
import { FocusComponent } from './focus.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { IndividualRocksComponent } from './individual-rocks/individual-rocks.component';
import { FuseWidgetModule } from '@fuse/components';

@NgModule({
    declarations: [FocusComponent, IndividualRocksComponent],
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
        FocusRoutingModule,
        FuseWidgetModule
    ]
})
export class FocusModule { }
