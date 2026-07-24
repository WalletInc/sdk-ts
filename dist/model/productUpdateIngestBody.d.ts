import { ProductKey } from './productKey';
import { ProductUpdateType } from './productUpdateType';
export declare class ProductUpdateIngestBody extends null<String, any> {
    'product': ProductKey;
    'version': any | null;
    'type': ProductUpdateType;
    'title': any | null;
    'items': any | null;
    'publishedAt'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
