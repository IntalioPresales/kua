import { SeatRoutingModule } from './seat-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatComponent } from './seat.component';
import { PersonAnalyzerComponent } from './person-analyzer/person-analyzer.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';

@NgModule({
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
        SeatRoutingModule
    ],
    declarations: [SeatComponent, PersonAnalyzerComponent]
})
export class SeatModule { }
