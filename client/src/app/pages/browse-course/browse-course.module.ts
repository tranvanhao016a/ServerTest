import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseCourseRoutingModule } from './browse-course-routing.module';
import { BrowseCourseComponent } from './browse-course.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BrowseCourseComponent
  ],
  imports: [
    CommonModule,
    BrowseCourseRoutingModule,
    SharedModule
  ]
})
export class BrowseCourseModule { }
