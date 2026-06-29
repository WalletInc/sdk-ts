export declare class WTVideoCreateParams extends null<String, any> {
    'title': any | null;
    'description': any | null;
    'orderNumber': number;
    'mediaURL': any | null;
    'additionalInfoURL'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
