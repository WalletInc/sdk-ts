export declare class WTRoomRateCreateParams {
    'title': string;
    'description': string;
    'displayValue': string;
    'orderNumber': number;
    'mediaURL'?: string;
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
