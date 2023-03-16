import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements  OnInit{
  public userid!:any;
  public user!:any;
  constructor( private routed: ActivatedRoute) {}
  ngOnInit():void{
    console.log(this.routed.snapshot.paramMap.get('id'));
    this.userid=this.routed.snapshot.paramMap.get('id')
  }
}
