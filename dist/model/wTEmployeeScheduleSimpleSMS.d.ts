import { WTEmployeeScheduleSimpleSMSListType } from './wTEmployeeScheduleSimpleSMSListType';
import { WTMessageType } from './wTMessageType';
export declare class WTEmployeeScheduleSimpleSMS extends null<String, any> {
    'phoneNumberID': string;
    'messageTemplate': any | null;
    'mediaURLs'?: any | null;
    'broadcastScheduledAt': any | null;
    'listType': WTEmployeeScheduleSimpleSMSListType;
    'listID': string;
    'messageType'?: WTMessageType;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
