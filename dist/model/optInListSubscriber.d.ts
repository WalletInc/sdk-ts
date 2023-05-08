import { SSOptInSource } from './sSOptInSource';
export declare class OptInListSubscriber {
    'callerName'?: string;
    'callerType'?: string;
    'optInListID': string;
    'optInSourceID': string | null;
    'isSubscribed': boolean;
    'isPendingAge21Verification': boolean;
    'mobilePhoneNumber': string;
    'referringURL': string;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'optedStatus'?: boolean;
    'source'?: SSOptInSource;
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
