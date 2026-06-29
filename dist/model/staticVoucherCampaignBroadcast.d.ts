import { StaticVoucherCampaign } from './staticVoucherCampaign';
import { StaticVoucherCampaignBroadcastBroadcastStatus } from './staticVoucherCampaignBroadcastBroadcastStatus';
import { StaticVoucherCampaignBroadcastPaymentObjectPrefix } from './staticVoucherCampaignBroadcastPaymentObjectPrefix';
import { StaticVoucherId } from './staticVoucherId';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
export declare class StaticVoucherCampaignBroadcast extends null<String, any> {
    'id': StaticVoucherId;
    'employeeID': string;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'phoneNumberID': string;
    'mediaURLs': any | null;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
    'broadcastStatus': StaticVoucherCampaignBroadcastBroadcastStatus;
    'broadcastQueuedAt': any | null;
    'broadcastStartedAt': any | null;
    'broadcastCompletedAt': any | null;
    'paymentObjectPrefix': StaticVoucherCampaignBroadcastPaymentObjectPrefix;
    'paymentObjectID': string;
    'messageTemplate': any | null;
    'broadcastScheduledAt': any | null;
    'staticVoucherCampaign': StaticVoucherCampaign;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
