import { WTEmployeeNotificationType } from './wTEmployeeNotificationType';
export declare class WTEmployeeNotification extends null<String, any> {
    'type': WTEmployeeNotificationType;
    'title': string;
    'content': any | null;
    'payload'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
