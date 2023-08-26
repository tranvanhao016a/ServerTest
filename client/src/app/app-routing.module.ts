import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  
  {
    path: 'register',loadChildren:()=> import('./pages/register/register.module').then(m => m.RegisterModule),
  },


  {
    path: '', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
  },
  
  {
    path: 'landing', loadChildren: () => import('../app/pages/landing/landing.module').then(m=>m.LandingModule),
  },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'browsecourse', loadChildren: () => import('./pages/browse-course/browse-course.module').then(m => m.BrowseCourseModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
