import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropPipe } from './transform/crop.pipe';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';

@NgModule({
  declarations: [CropPipe, LoadingComponent],
  imports: [CommonModule],
  exports: [CropPipe, LoadingComponent],
})
export class SharedModule {}
