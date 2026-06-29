export declare class WTLoungeUpdateParams extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'displayedPrice'?: any | null;
    'orderNumber': number;
    'mediaURL'?: string;
    'additionalInfoURL'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
