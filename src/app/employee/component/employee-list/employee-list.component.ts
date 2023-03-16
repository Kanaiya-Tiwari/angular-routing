import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  public employees:any[]=[
    {
      id:1,
      name:"employee1"
    },
    {
      id:2,
      name:"employee2"
    },
    {
      id:3,
      name:"employee3"
    },
    {
      id:4,
      name:"employee4"
    }
];
}
