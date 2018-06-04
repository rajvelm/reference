import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InventoryComponent } from './inventory.component';
import { InventoryRoutes } from './inventory.routing';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(InventoryRoutes)

  ],
  declarations: [ InventoryComponent ]
})

export class InventoryModule {}
