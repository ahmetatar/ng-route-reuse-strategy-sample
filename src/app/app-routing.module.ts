import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { CustomRouteReuseService } from 'src/core/routing/custom-route-reuse.service';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductResolverService } from './product-list/services/product-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    component: ProductListComponent,
    data: { reuse: true },
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    resolve: { product: ProductResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseService,
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
