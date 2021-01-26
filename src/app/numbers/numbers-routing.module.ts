import { NumbersComponent } from './numbers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: '/seats', pathMatch: 'full' },
    {
        path: "",
        component: NumbersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NumbersRoutingModule { }
