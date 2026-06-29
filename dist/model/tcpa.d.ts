import { StaticVoucherId } from './staticVoucherId';
export declare class Tcpa extends null<String, any> {
    'cellPhone': any | null;
    'phoneNumberID': string;
    'id': StaticVoucherId;
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
