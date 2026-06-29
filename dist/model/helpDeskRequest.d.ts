import { StaticVoucherId } from './staticVoucherId';
export declare class HelpDeskRequest extends null<String, any> {
    'merchantPhoneNumberID': string;
    'cellPhone': any | null;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'employeeID': string;
    'isResolved': any | null;
    'resolvedAt'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
