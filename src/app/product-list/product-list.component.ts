import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PRODUCTS } from '../data/products';
import { ProductSearchService } from '../product-search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = PRODUCTS;

  sub: Subscription;
  constructor(private productSearchService: ProductSearchService) { }

  ngOnInit(): void {
    console.log('PRODUCTS 1', this.products);

    this.sub = this.productSearchService.productName$.subscribe(
      (res: string) => {
        console.log(res);
        console.log('PRODUCTS 1', this.products);
        if (res.length > 0) {
          this.products = this.products.filter((p) =>
            p.title.toLocaleLowerCase().startsWith(res.toLocaleLowerCase())
          );
        } else {
          this.products = PRODUCTS;
        }
        console.log('PRODUCTS 2', this.products);
      }
    );
  }

  addToCart(product) {
    this.productSearchService.addToCarts(product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
