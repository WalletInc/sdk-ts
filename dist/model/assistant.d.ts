import { AmenityId } from './amenityId';
export declare class Assistant extends null<String, any> {
    'name': any | null;
    'description'?: any | null;
    'instructions': any | null;
    'tools'?: any | null;
    'toolResources'?: any | null;
    'metadata'?: any | null;
    'temperature': any | null;
    'topP': any | null;
    'responseFormat'?: any | null;
    'id': AmenityId;
    'createdAt': any | null;
    'updatedAt': any | null;
    'assistantID': any | null;
    'isActive': any | null;
    'merchantID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
