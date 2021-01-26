import { ConcludeComponent } from './process/conclude/conclude.component';
import { PeopleHeadlinesComponent } from './process/people-headlines/people-headlines.component';
import { IdsComponent } from './process/ids/ids.component';
import { TodoComponent } from './process/todo/todo.component';
import { RocksReviewComponent } from './process/rocks-review/rocks-review.component';
import { ScoreCardComponent } from './process/score-card/score-card.component';
import { SegueComponent } from './process/segue/segue.component';
import { ProcessComponent } from './process/process.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/meetings/segue', pathMatch: 'full' },

    {
        path: "",
        component: ProcessComponent,
        children: [
            {
                path: 'segue',
                component: SegueComponent
            },
            {
                path: 'score_card',
                component: ScoreCardComponent
            },
            {
                path: 'rocks_review',
                component: RocksReviewComponent
            },
            {
                path: 'people_headlines',
                component: PeopleHeadlinesComponent
            },
            {
                path: 'todo',
                component: TodoComponent
            },
            {
                path: 'ids',
                component: IdsComponent
            },
            {
                path: 'conclude',
                component: ConcludeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeetingsRoutingModule { }
