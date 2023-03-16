import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthserviceService } from '../core/authservice.service';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';

import { EmployeeListComponent } from './component/employee-list/employee-list.component';

const routes: Routes = [
{path:"",redirectTo:'employee-list',pathMatch:'full'},
{path:'employee-list',component:EmployeeListComponent,canActivate:[AuthserviceService]},
{path:'employee-list/:id',component:EmployeeDetailComponent,canActivate:[AuthserviceService]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
