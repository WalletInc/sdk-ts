export declare class WTEmailSubscriberCreateParamsWalletUI {
    'firstName': string;
    'lastName': string;
    'emailAddress': string;
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