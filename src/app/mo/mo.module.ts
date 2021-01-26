import { MacroComponent } from './macro/macro.component';
import { MicroComponent } from './micro/micro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoRoutingModule } from './mo-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { MoComponent } from './mo.component';
import { ListComponent } from './micro/list/list.component';

@NgModule({
  declarations: [
      MoComponent,
      ListComponent,
      MicroComponent,
      MacroComponent
  ],
  imports: [
    FuseSharedModule,
    SharedMaterialModule,
    MoRoutingModule
  ]
})
export class MoModule { }
