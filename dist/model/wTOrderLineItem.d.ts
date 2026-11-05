import { AmenityId } from './amenityId';
export declare class WTOrderLineItem extends null<String, any> {
    'id': AmenityId;
    'productID'?: AmenityId;
    'serviceID'?: AmenityId;
    'titleSnapshot': any | null;
    'unitAmount': any | null;
    'quantity': any | null;
    'note'?: any | null;
    'menuItemID'?: any | null;
    'options'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
