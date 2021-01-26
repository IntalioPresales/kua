import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { ShellComponent } from './main/shell/shell.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './blocks/authentication/authentication';
import { MeetingsModule } from './meetings/meetings.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FocusModule } from './focus/focus.module';
import { UniqueAbilityModule } from './unique-ability/unique-ability.module';
import { MacroModule } from './macro/macro.module';
import { MicroModule } from './micro/micro.module';
import { MoModule } from './mo/mo.module';

@NgModule({
    declarations: [
        AppComponent,
        ShellComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        // RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AuthenticationModule,
        FocusModule,
        UniqueAbilityModule,
        MacroModule,
        MicroModule,
        MoModule,
        
    ],
    bootstrap   : [
        ShellComponent
    ]
})
export class AppModule
{
}
