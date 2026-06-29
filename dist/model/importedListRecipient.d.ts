import { StaticVoucherId } from './staticVoucherId';
export declare class ImportedListRecipient extends null<String, any> {
    'importedListID': string;
    'mobilePhoneNumber': any | null;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'optedStatus'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
