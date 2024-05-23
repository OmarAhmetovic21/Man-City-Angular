import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { ComponentsComponent } from './components.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddFixtureComponent } from './add-fixture/add-fixture.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
      ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        AboutUsComponent,
        EventsComponent,
        LoginComponent,
        AdminPageComponent,
        AddFixtureComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
