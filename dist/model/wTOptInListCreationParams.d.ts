export declare class WTOptInListCreationParams extends null<String, any> {
    'isActive': any | null;
    'listName': any | null;
    'phoneNumberID': string;
    'estimatedMessagesPerMonth': any | null;
    'optInKeyword': any | null;
    'optOutKeyword': any | null;
    'optInConfirmedResponse': any | null;
    'optOutConfirmedResponse': any | null;
    'optInConfirmedCustomerReceives': any | null;
    'optOutConfirmedCustomerReceives': any | null;
    'isOver21Required': any | null;
    'optInConfirmedMediaURLs'?: any | null;
    'optOutConfirmedMediaURLs'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
