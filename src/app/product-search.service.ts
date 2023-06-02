import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  carts = [];

  productName$ = new BehaviorSubject<string>('');

  getCarts$ = new BehaviorSubject<boolean>(false);

  addToCarts(product: any) {
    this.carts.push(product);
  }

  constructor() { }
}
