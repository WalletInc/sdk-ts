export declare class WTEmailSubscriberCreateParams extends null<String, any> {
    'firstName': string;
    'lastName': string;
    'emailAddress': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
