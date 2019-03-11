import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';
import { Section5Component } from './section5/section5.component';
import { Section6Component } from './section6/section6.component';
import { Section7Component } from './section7/section7.component';
import { Section8Component } from './section8/section8.component';
import { Section9Component } from './section9/section9.component';
import { Section10Component } from './section10/section10.component';
import { Section7LabComponent } from './section7-lab/section7-lab.component';
import { Section8LabComponent } from './section8-lab/section8-lab.component';
import { Section9LabComponent } from './section9-lab/section9-lab.component';
import {GithubService}   from './section9-lab/githubservice.service';
import { Section11Component } from './section11/section11.component';
import { Section12Component } from './section12/section12.component';
import { Section13Component } from './section13/section13.component';
import { Section15Component } from './section15/section15.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { GithubnotesComponent } from './githubnotes/githubnotes.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
    Section10Component,
    Section7LabComponent,
    Section8LabComponent,
    Section9LabComponent,
    Section11Component,
    Section12Component,
    Section13Component,
    Section15Component,
    NavbarComponent,
    SidenavComponent,
    GithubnotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      {
        path: '',
        component : Section1Component
      },
      {
        path: 'section1',
        component : Section1Component
      },
      {
        path: 'section2',
        component : Section2Component
      },
      {
        path: 'section3',
        component : Section3Component
      },
      {
        path: 'section4',
        component : Section4Component
      },
      {
        path: 'section5',
        component : Section5Component
      },
      {
        path: 'section6',
        component : Section6Component
      },
      {
        path: 'section7',
        component : Section7Component
      },
      {
        path: 'section8',
        component : Section8Component
      },
      {
        path: 'section9',
        component : Section9Component
      },
      {
        path: 'section10',
        component : Section10Component
      },
      {
        path: 'section11',
        component : Section11Component
      },
      {
        path: 'section12',
        component : Section12Component
      },
      {
        path: 'section13',
        component : Section13Component
      },
      {
        path: 'section15',
        component : Section15Component
      },
      {
        path: 'githubnotes',
        component : GithubnotesComponent
      }

    ])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
