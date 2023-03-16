import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';


@NgModule({
  declarations: [
   
    EmployeeListComponent,
   EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
