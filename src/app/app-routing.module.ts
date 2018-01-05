import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent }      from './home/home.component';
import {LayoutsComponent} from './layouts/layouts.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {AnimationsComponent} from './animations/animations.component';



const routes: Routes = [
  
  { path: 'home',  component: HomeComponent },
  { path: 'layouts',  component: LayoutsComponent },
  { path: 'buttons',  component: ButtonsComponent },
  { path: 'animations',  component: AnimationsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 // {path: '**', component: PageNotFoundComponent}
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
