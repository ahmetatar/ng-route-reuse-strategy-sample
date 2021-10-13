import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators';
import { LoadingService } from 'src/shared/loading/loading.service';
import { Product } from '../model/product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product | undefined> {
  constructor(
    private productService: ProductService,
    private loadingService: LoadingService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product | Observable<Product | undefined> | Promise<Product> {

    const id = route.params['id'];

    return this.productService.getProductById(id).pipe(
      tap(() => this.loadingService.show()),
      delay(2000),
      finalize(() => this.loadingService.hide())
    );
  }
}
