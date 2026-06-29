import { StaticVoucherId } from './staticVoucherId';
export declare class ImportedList extends null<String, any> {
    'employeeID': string;
    'isActive': boolean;
    'listName': string;
    'phoneNumberID': string;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
