import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductSearchService } from '../product-search.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  carts = [];

  sub: Subscription;

  constructor(private productSearchService: ProductSearchService) { }

  ngOnInit(): void {
    console.log('Shopping Cart', this.carts);

    this.sub = this.productSearchService.getCarts$.subscribe((res) => {
      console.log(res);
      this.carts = this.productSearchService.carts;
      console.log(this.carts);
    });
  }

  removeFromCart(index) {
    this.carts.splice(index, 1);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
