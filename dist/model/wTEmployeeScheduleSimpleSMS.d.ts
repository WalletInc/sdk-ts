import { WTEmployeeScheduleSimpleSMSListType } from './wTEmployeeScheduleSimpleSMSListType';
export declare class WTEmployeeScheduleSimpleSMS extends null<String, any> {
    'phoneNumberID': string;
    'messageTemplate': any | null;
    'mediaURLs'?: any | null;
    'broadcastScheduledAt': any | null;
    'listType': WTEmployeeScheduleSimpleSMSListType;
    'listID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
