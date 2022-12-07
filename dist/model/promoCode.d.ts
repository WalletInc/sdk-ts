export declare class PromoCode {
    'title': string;
    'description': string;
    'promoCode': string;
    'displayValue': string;
    'orderNumber': number;
    'mediaURL'?: string;
    'startDate': Date;
    'expirationDate': Date;
    'id': string | null;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
