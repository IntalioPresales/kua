import { ActivityTabComponent } from './activity-tab/activity-tab.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniqueAbilityRoutingModule } from './unique-ability-routing.module';
import { UniqueAbilityComponent } from './unique-ability.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';

@NgModule({
    declarations: [
        UniqueAbilityComponent,
        ActivityTabComponent,
    ],
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
        UniqueAbilityRoutingModule
    ]
})
export class UniqueAbilityModule { }
