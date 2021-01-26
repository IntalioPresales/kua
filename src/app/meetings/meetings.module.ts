import { FuseSharedModule } from './../../@fuse/shared.module';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { ProcessComponent } from './process/process.component';
import { SegueComponent } from './process/segue/segue.component';
import { ScoreCardComponent } from './process/score-card/score-card.component';
import { RocksReviewComponent } from './process/rocks-review/rocks-review.component';
import { TodoComponent } from './process/todo/todo.component';
import { IdsComponent } from './process/ids/ids.component';
import { PeopleHeadlinesComponent } from './process/people-headlines/people-headlines.component';
import { ConcludeComponent } from './process/conclude/conclude.component';
import { CountdownModule} from 'ngx-countdown';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
    declarations: [MeetingsComponent, ProcessComponent, SegueComponent, ScoreCardComponent, RocksReviewComponent, TodoComponent, IdsComponent, PeopleHeadlinesComponent, ConcludeComponent],
    imports: [
        SharedMaterialModule,
        FuseSharedModule,
        MeetingsRoutingModule,
        CountdownModule,
        NgxChartsModule,
    ]
})
export class MeetingsModule { }
