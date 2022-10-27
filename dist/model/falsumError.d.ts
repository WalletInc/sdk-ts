import { FalsumField } from './falsumField';
export declare class FalsumError {
    'message': string;
    'fields': Array<FalsumField>;
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
