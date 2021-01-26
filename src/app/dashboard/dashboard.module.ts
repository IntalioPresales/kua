import { SharedMaterialModule } from './../blocks/common/material-shared-module';
import { FuseSharedModule } from './../../@fuse/shared.module';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
        FuseWidgetModule,
        FuseSidebarModule,
        DashboardRoutingModule,

    ]
})
export class DashboardModule {
    constructor() {
    }
}
