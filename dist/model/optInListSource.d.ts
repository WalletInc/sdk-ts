import { StaticVoucherId } from './staticVoucherId';
export declare class OptInListSource extends null<String, any> {
    'id': StaticVoucherId;
    'listID': string;
    'sourceName': any | null;
    'employeeID': string;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
