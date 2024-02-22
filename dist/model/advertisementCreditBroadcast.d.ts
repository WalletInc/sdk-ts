import { AdvertisementCredit } from './advertisementCredit';
import { DynamicVoucherBroadcastListType } from './dynamicVoucherBroadcastListType';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class AdvertisementCreditBroadcast {
    'phoneNumberID': string;
    'paymentObjectPrefix': PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix;
    'paymentObjectID': string;
    'messageTemplate': string;
    'mediaURLs': Array<string>;
    'employeeID': string;
    'broadcastScheduledAt': Date;
    'id': WTWalletPageViewId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'broadcastStatus': PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus;
    'broadcastQueuedAt': Date | null;
    'broadcastStartedAt': Date | null;
    'broadcastCompletedAt': Date | null;
    'listType': DynamicVoucherBroadcastListType;
    'listID': string;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
    'advertisementCredit': AdvertisementCredit;
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
