import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
export declare class SimpleSMSBroadcast {
    'phoneNumberID': string;
    'paymentObjectPrefix': string | null;
    'paymentObjectID': string;
    'messageTemplate': string;
    'mediaURLs': Array<string>;
    'employeeID': string;
    'broadcastScheduledAt': Date;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'broadcastStatus': string | null;
    'broadcastQueuedAt': Date | null;
    'broadcastStartedAt': Date | null;
    'broadcastCompletedAt': Date | null;
    'listType': string | null;
    'listID': string;
    'optInList'?: WTOptInList;
    'importedList'?: WTImportedList;
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
