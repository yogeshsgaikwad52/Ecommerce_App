import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductSearchService } from '../product-search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private productSearchService: ProductSearchService
  ) { }

  navigateToCart() {
    this.router.navigate(['/shopping-cart']);
    this.productSearchService.getCarts$.next(true);
  }
}
