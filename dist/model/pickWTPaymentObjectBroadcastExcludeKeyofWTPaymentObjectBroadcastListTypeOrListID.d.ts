import { WTImportedList } from './wTImportedList';
import { WTOptInList } from './wTOptInList';
export declare class PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID {
    'id': string | null;
    'employeeID': string;
    'isActive': boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
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
