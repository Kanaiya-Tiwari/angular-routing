import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
public user!:any;
public productid!:any;
  constructor( private route: ActivatedRoute) {}
  ngOnInit():void{
    console.log(this.route.snapshot.paramMap.get('id'));
    this.productid=this.route.snapshot.paramMap.get('id');
  }
}
