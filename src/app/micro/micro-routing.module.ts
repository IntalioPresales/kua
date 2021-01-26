import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MicroComponent } from './micro.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'micro',
        component: MicroComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MicroRoutingModule { }
