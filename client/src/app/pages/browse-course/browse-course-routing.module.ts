import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseCourseComponent } from './browse-course.component';

const routes: Routes = [
  { path: '',  component: BrowseCourseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseCourseRoutingModule { }
