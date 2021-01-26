import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicGuard, ProtectedGuard } from 'ngx-auth';


const appRoutes: Routes = [
    { path: '', redirectTo: '/unique_ability', pathMatch: 'full' },

    {
        path: 'login',
        // canActivate: [PublicGuard],
        loadChildren: () => import('./main/login/login.module').then(m => m.LoginModule),
        // loadChildren: './main/login/login.module#LoginModule'
    },
    {
        path: '',
        component: AppComponent,
        // canActivate: [ProtectedGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'story',
                loadChildren: () => import('./story/story.module').then(m => m.StoryModule),
            },
            {
                path: 'seat',
                loadChildren: () => import('./seat/seat.module').then(m => m.SeatModule),
            },
            {
                path: 'numbers',
                loadChildren: () => import('./numbers/numbers.module').then(m => m.NumbersModule),
            },
            {
                path: 'focus',
                loadChildren: () => import('./focus/focus.module').then(m => m.FocusModule),
            },
            {
                path: 'unique_ability',
                loadChildren: () => import('./unique-ability/unique-ability.module').then(m => m.UniqueAbilityModule),
            },
            {
                path: 'macro_map',
                loadChildren: () => import('./macro/macro.module').then(m => m.MacroModule),
            },
            {
                path: 'micro_map',
                loadChildren: () => import('./micro/micro.module').then(m => m.MicroModule),
            },
            {
                path: 'meetings',
                loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule),
            },
            {
                path: 'mo',
                loadChildren: () => import('./mo/mo.module').then(m => m.MoModule),
            },
            // {
            //     path: 'seats',
            //     loadChildren: () => import('./seats/seats.module').then(m => m.SeatsModule),
            // },
            // {
            //     path: 'meetings',
            //     loadChildren: () => import('./meetings/meetings.module').then(m => m.DashboardModule),
            // },
            // {
            //     path: 'rocks',
            //     loadChildren: () => import('./rocks/rocks.module').then(m => m.DashboardModule),
            // },

        ]
    },
    // { path: 'not-found', component: NotFoundComponent },
    // { path: '**', redirectTo: '/seats', pathMatch: 'full' },
    // { path: '**',  redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
