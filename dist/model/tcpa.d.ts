import { StaticVoucherId } from './staticVoucherId';
export declare class Tcpa extends null<String, any> {
    'cellPhone': string;
    'phoneNumberID': string;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
