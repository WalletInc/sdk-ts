import { WTRelatedItemSourceType } from './wTRelatedItemSourceType';
export declare class WTRelatedItemUsage extends null<String, any> {
    'sourceType': WTRelatedItemSourceType;
    'sourceId': any | null;
    'title': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
