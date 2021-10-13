import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/shared/loading/loading.service';
import { Product } from './model/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe(
      tap(() => this.loadingService.show()),
      delay(2000), // simulate slow service call
      map((p) => p.filter((x) => x.type === 'simple')),
      finalize(() => this.loadingService.hide())
    );
  }
}
