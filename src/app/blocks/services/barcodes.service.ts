import { Barcode } from './../interface/barcode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BarcodesService {

    private backendUrl: string = environment.backendUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    getByBarcode(bracode: string): Observable<Barcode> {
        return this.httpClient.get<Barcode>(`${this.backendUrl}/api/barcodes/${bracode}`)
            ;
    }

    createBarcodes(bracodes, productId: any) {
        return this.httpClient.post<Barcode>(`${this.backendUrl}/api/barcodes/${productId}/createBarcodes`, bracodes)
    }

}
