import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crop',
})
export class CropPipe implements PipeTransform {
  transform(value: string | undefined, size: number = 10): string {
    if (value) {
      return value.slice(0, size) + '...';
    }

    return '';
  }
}
