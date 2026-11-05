import { WTRelatedItemSourceType } from './wTRelatedItemSourceType';
export declare class WTRelatedItems extends null<String, any> {
    'sourceType': WTRelatedItemSourceType;
    'sourceId': any | null;
    'items': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
