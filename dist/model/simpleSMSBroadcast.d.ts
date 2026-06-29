import { DynamicVoucherBroadcastListType } from './dynamicVoucherBroadcastListType';
import { StaticVoucherCampaignBroadcastBroadcastStatus } from './staticVoucherCampaignBroadcastBroadcastStatus';
import { StaticVoucherCampaignBroadcastPaymentObjectPrefix } from './staticVoucherCampaignBroadcastPaymentObjectPrefix';
import { StaticVoucherId } from './staticVoucherId';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
export declare class SimpleSMSBroadcast extends null<String, any> {
    'phoneNumberID': string;
    'paymentObjectPrefix': StaticVoucherCampaignBroadcastPaymentObjectPrefix;
    'paymentObjectID': string;
    'messageTemplate': any | null;
    'mediaURLs': any | null;
    'employeeID': string;
    'broadcastScheduledAt': any | null;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'broadcastStatus': StaticVoucherCampaignBroadcastBroadcastStatus;
    'broadcastQueuedAt': any | null;
    'broadcastStartedAt': any | null;
    'broadcastCompletedAt': any | null;
    'listType': DynamicVoucherBroadcastListType;
    'listID': string;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
