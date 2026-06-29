import { StaticVoucherId } from './staticVoucherId';
export declare class WTOptInList extends null<String, any> {
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
    'optInConfirmedMediaURLs': any | null;
    'optOutConfirmedMediaURLs': any | null;
    'isOver21Required': boolean;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
