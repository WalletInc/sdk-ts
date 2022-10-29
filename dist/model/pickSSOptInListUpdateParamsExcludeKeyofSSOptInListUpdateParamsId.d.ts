export declare class PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId {
    'employeeID': string;
    'isActive': boolean;
    'listName': string;
    'phoneNumberID': string;
    'estimatedMessagesPerMonth': number;
    'optInKeyword': string;
    'optOutKeyword': string;
    'optInConfirmedResponse': string;
    'optOutConfirmedResponse': string;
    'optInConfirmedCustomerReceives': string;
    'optOutConfirmedCustomerReceives': string;
    'optInConfirmedMediaURLs': Array<string>;
    'optOutConfirmedMediaURLs': Array<string>;
    'isOver21Required': boolean;
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
