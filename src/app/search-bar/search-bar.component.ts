import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from '../product-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  productName = '';

  constructor(private productSearchService: ProductSearchService) { }

  ngOnInit(): void { }

  searchProduct() {
    // Emit the event
    this.productSearchService.productName$.next(this.productName);
  }

  clearSearch() {
    this.productName = '';
    // Emit the event
    this.productSearchService.productName$.next(this.productName);
  }
}
