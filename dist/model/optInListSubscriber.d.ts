import { OptInListSubscriberOptInSourceID } from './optInListSubscriberOptInSourceID';
import { SSOptInSource } from './sSOptInSource';
import { StaticVoucherId } from './staticVoucherId';
export declare class OptInListSubscriber extends null<String, any> {
    'callerName'?: any | null;
    'callerType'?: any | null;
    'optInListID': string;
    'optInSourceID': OptInListSubscriberOptInSourceID;
    'isSubscribed': any | null;
    'isPendingAge21Verification': any | null;
    'mobilePhoneNumber': any | null;
    'referringURL': any | null;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'optedStatus'?: any | null;
    'source'?: SSOptInSource;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
