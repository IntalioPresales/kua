import { NumbersRoutingModule } from './numbers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './numbers.component';
import { StoryRoutingModule } from 'app/story/story-routing.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
    imports: [
        NumbersRoutingModule,
        FuseSharedModule,
        SharedMaterialModule,
        NgxChartsModule,
    ],
    declarations: [NumbersComponent]
})
export class NumbersModule { }
