import { StaticVoucherCampaign } from './staticVoucherCampaign';
import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
export declare class StaticVoucherCampaignBroadcast {
    'id': string | null;
    'employeeID': string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'phoneNumberID': string;
    'mediaURLs': Array<string>;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
    'broadcastStatus': string | null;
    'broadcastQueuedAt': Date | null;
    'broadcastStartedAt': Date | null;
    'broadcastCompletedAt': Date | null;
    'paymentObjectPrefix': string | null;
    'paymentObjectID': string;
    'messageTemplate': string;
    'broadcastScheduledAt': Date;
    'staticVoucherCampaign': StaticVoucherCampaign;
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
