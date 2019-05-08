import { NgModule } from '@angular/core';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module'
import { ListEmployeeComponent } from './list-employee.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    EmployeeRoutingModule,
    SharedModule,
    RouterModule
    
  ],
  declarations: [
    CreateEmployeeComponent,
    ListEmployeeComponent,
  ]
})
export class EmployeeModule { }
