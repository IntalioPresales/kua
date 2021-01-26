import { FuseSharedModule } from './../../../../@fuse/shared.module';
import { NgModule } from '@angular/core';
import { PrintOrderComponent } from './print-order.component';
import { SharedMaterialModule } from 'app/blocks/common/material-shared-module';
import { NgxPrintModule } from 'ngx-print';
import { PrintOrderService } from './print-order.service';

@NgModule({
    imports: [
        FuseSharedModule,
        SharedMaterialModule,
        NgxPrintModule
    ],
    declarations: [PrintOrderComponent],
    entryComponents: [PrintOrderComponent],
    providers: [PrintOrderService]

})
export class PrintOrderModule { }
