import { AmenityId } from './amenityId';
export declare class QRCodeDesign extends null<String, any> {
    'name': any | null;
    'serializedJsonConfiguration': object;
    'serializedJsonBorder'?: object;
    'id': AmenityId;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
