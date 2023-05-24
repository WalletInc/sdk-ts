export declare class WTPromoCodeCreateParams {
    'title': string;
    'description': string;
    'promoCode': string;
    'displayValue': string;
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
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
