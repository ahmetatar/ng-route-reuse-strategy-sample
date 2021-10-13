import { Pipe, PipeTransform } from '@angular/core';
import { Price, PriceRange } from '../model/product.model';

@Pipe({
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: Price | undefined, currency: string = '$'): string | void {
    if (!value) {
      return;
    }

    if (typeof value === 'string') {
      return currency + value;
    } else {
      const price = value as PriceRange;
      return `${currency + price.min}-${currency + price.max}`;
    }
  }
}
