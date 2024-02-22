import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID {
    'id': WTWalletPageViewId;
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
    'broadcastQueuedAt': Date | null;
    'broadcastStartedAt': Date | null;
    'broadcastCompletedAt': Date | null;
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
