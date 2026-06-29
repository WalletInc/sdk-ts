import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix';
import { StaticVoucherId } from './staticVoucherId';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
export declare class PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID {
    'id': StaticVoucherId;
    'employeeID': string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'phoneNumberID': string;
    'mediaURLs': Array<string>;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
    'broadcastStatus': PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus;
    'broadcastQueuedAt': Date;
    'broadcastStartedAt': Date;
    'broadcastCompletedAt': Date;
    'paymentObjectPrefix': PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix;
    'paymentObjectID': string;
    'messageTemplate': string;
    'broadcastScheduledAt': Date;
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
