import { ProductKey } from './productKey';
export declare class ProductUpdateIngestAck extends null<String, any> {
    'received': boolean;
    'product'?: ProductKey;
    'version'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
