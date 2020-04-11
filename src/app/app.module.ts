import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorksComponent } from './components/works/works.component';
import { WorksDetailsComponent } from './components/works-details/works-details.component';
import { BlogComponent } from './components/blog/blog.component'

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'workdetails/:pagename', component: WorksDetailsComponent},
  { path: 'blog/:blogname', component : BlogComponent }
    ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    WorksDetailsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
