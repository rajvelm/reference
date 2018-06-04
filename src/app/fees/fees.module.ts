import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule} from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FeesComponent } from './fees.component';
import { FeesRoutes } from './fees.routing';
import { AgGridModule} from "ag-grid-angular/main";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(FeesRoutes),
    AgGridModule.withComponents([]),
    NgxDatatableModule,
    QuillModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  declarations: [ FeesComponent ]
})

export class FeesModule {}
