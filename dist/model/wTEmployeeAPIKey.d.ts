import { StaticVoucherId } from './staticVoucherId';
export declare class WTEmployeeAPIKey extends null<String, any> {
    'title': string;
    'description': string;
    'employeeID': string;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'apiKey'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
