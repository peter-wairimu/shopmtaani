import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public products : any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res => {
      this.products = res;
    });


  }

}
