import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ViewClientComponent } from './view-client/view-client.component';

const routes: Routes = [
    {
        path: '',
        component: ClientsComponent,
    },
    {
        path: 'view-client/:id',
        component: ViewClientComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule { }
