import { ContentStatus } from './contentStatus';
import { ProductKey } from './productKey';
import { ProductUpdateType } from './productUpdateType';
export declare class ProductUpdateEntry extends null<String, any> {
    'product': ProductKey;
    'version': string;
    'type': ProductUpdateType;
    'title': string;
    'items': any | null;
    'publishedAt': string;
    'contentStatus'?: ContentStatus;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
