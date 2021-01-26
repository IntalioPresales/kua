import { SharedMaterialModule } from './../../../../../blocks/common/material-shared-module';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { FuseNavigationModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { NavbarVerticalStyle1Component } from 'app/layout/components/navbar/vertical/style-1/style-1.component';
import { MdePopoverModule } from '@material-extended/mde';


@NgModule({
    declarations: [
        NavbarVerticalStyle1Component
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        SharedMaterialModule,
        MdePopoverModule,
        FuseSharedModule,
        FuseNavigationModule
    ],
    exports: [
        NavbarVerticalStyle1Component
    ]
})
export class NavbarVerticalStyle1Module {
}
