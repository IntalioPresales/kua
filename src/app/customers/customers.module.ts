import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
  imports: [
    // CommonModule,

    FuseSharedModule,
    CustomersRoutingModule,

  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
