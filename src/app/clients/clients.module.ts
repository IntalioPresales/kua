import { ViewClientComponent } from './view-client/view-client.component';
import { ClientsDataSource } from './clients.datasource';
import { ClientsRoutingModule } from './clients-routing.module';
import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';

@NgModule({
    imports: [
        ClientsRoutingModule,
        FuseSharedModule,
        SharedMaterialModule,
    ],
    declarations: [
        ClientsComponent,
        ViewClientComponent
    ],
    providers: [
        ClientsDataSource
    ],
})
export class ClientsModule { }
