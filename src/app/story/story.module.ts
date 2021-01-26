import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { StoryRoutingModule } from './story-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story.component';
import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
    imports: [
        StoryRoutingModule,
        FuseSharedModule,
        SharedMaterialModule
    ],
    declarations: [
        StoryComponent
    ]
})
export class StoryModule { }
