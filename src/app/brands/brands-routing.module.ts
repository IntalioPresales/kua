import { EditBrandComponent } from './edit-brand/edit-brand.component';
import { NewBrandComponent } from './new-brand/new-brand.component';
import { BrandsComponent } from './brands.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: BrandsComponent,
    },
    {
        path: 'new-brand',
        component: NewBrandComponent,
    },
    {
        path: 'edit-brand/:id',
        component: EditBrandComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrandsRoutingModule { }
