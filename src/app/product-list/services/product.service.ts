import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRODUCTS } from '../model/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  getProducts() {
    return of(PRODUCTS);
  }

  getProductById(id: string) {
    return of(PRODUCTS).pipe(
      map((p) => p.find((x) => x._id === x._id))
    );
  }
}
