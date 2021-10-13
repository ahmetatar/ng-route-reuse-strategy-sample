import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { PriceFormatPipe } from './transform/price-format.pipe';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, ProductSearchComponent, ProductItemComponent, PriceFormatPipe],
  imports: [SharedModule, RouterModule, CommonModule],
})
export class ProductModule {}
