import { Image } from './image';
import { Barcode } from 'app/blocks/interface/barcode';

export interface Product {
    sku?: string;
    id?: number | null;
    name?: string | null;
    subCategory_id?: string | null;
    brand_id?: string | null;
    description?: string | null;
    shortDescription?: string | null;
    cost?: any | null;
    price?: any | null;
    wholeSalePrice?: any | null;
    discount?: any | null;
    quantity?: any | null;
    status?: boolean | null;
    imageUrl?: string | null;
    weight?: string | null;
    color?: string | null;
    size?: any | null;
    special?: boolean | null;
    notes?: string | null;
    barcodes?: Barcode[] | null;
    images?: Image[] | null;
}
