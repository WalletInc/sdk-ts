import { WTEmployeeNotificationType } from './wTEmployeeNotificationType';
export declare class WTEmployeeNotification {
    'type': WTEmployeeNotificationType;
    'title': string;
    'content': string;
    'payload'?: any | null;
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
