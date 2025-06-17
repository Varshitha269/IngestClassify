import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload';
import { LandingPage } from './landing-page/landing-page';
import { NgModule } from '@angular/core';
import { Admindashboard } from './admindashboard/admindashboard';
import { Uploaddataflow } from './uploaddataflow/uploaddataflow';
import { Login } from './login/login';
import { About } from './about/about';

  export const routes: Routes = [
     {path:'', component:LandingPage},
     { path: 'upload', component: UploadComponent },
     { path: 'admin', component: Admindashboard },
     { path: 'admin/users', component: Admindashboard },
     { path: 'admin/files', component: Admindashboard },
     { path: 'admin/profile', component: Admindashboard },
     { path :'uploaddataflow', component:Uploaddataflow},
     {path :'login', component:Login},
     { path:'about', component:About}
   ];
   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule { } 
