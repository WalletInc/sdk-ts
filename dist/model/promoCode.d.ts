import { AmenityId } from './amenityId';
export declare class PromoCode extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'promoCode': any | null;
    'displayValue': any | null;
    'orderNumber': any | null;
    'mediaURL'?: any | null;
    'startDate': any | null;
    'expirationDate': any | null;
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'merchantID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
