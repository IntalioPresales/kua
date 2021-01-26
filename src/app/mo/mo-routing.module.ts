import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoComponent } from './mo.component';

const routes: Routes = [
    {
        path:'',
        component: MoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoRoutingModule { }
