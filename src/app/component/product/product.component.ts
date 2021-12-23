import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public products : any;

  constructor(private api : ApiService,private cartservice: CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res => {
      this.products = res;

      this.products.forEach((a:any) => {
        Object.assign(a, {quantity:1,total:a.price});

      });
        
      });
  


  }
  addCart(product:any) {
    this.cartservice.addtoCart(product);

  }

}
