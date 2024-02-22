import { WTEmployeeScheduleSimpleSMSListType } from './wTEmployeeScheduleSimpleSMSListType';
export declare class WTEmployeeScheduleSimpleSMS {
    'phoneNumberID': string;
    'messageTemplate': string;
    'mediaURLs'?: Array<string>;
    'broadcastScheduledAt': Date;
    'listType': WTEmployeeScheduleSimpleSMSListType;
    'listID': string;
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
