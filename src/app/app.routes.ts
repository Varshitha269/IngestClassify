import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload';
import { LandingPage } from './landing-page/landing-page';
import { NgModule } from '@angular/core';
import { Admindashboard } from './admindashboard/admindashboard';

  export const routes: Routes = [
     {path:'', component:LandingPage},
     { path: 'upload', component: UploadComponent },
     { path: 'admin', component: Admindashboard },
     { path: 'admin/users', component: Admindashboard },
     { path: 'admin/files', component: Admindashboard },
     { path: 'admin/profile', component: Admindashboard }
   ];
   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { } 
