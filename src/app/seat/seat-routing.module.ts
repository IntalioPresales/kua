import { PersonAnalyzerComponent } from './person-analyzer/person-analyzer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatComponent } from './seat.component';

const routes: Routes = [
    // { path: '', redirectTo: '/seats', pathMatch: 'full' },
    {
        path: "",
        component: SeatComponent
    },
    {
        path: "person_analyzer",
        component: PersonAnalyzerComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeatRoutingModule { }
