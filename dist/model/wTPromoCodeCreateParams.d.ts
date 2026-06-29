export declare class WTPromoCodeCreateParams extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'promoCode': any | null;
    'displayValue': any | null;
    'orderNumber': number;
    'mediaURL'?: string;
    'startDate': Date;
    'expirationDate': Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
