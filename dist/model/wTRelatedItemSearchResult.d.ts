import { WTRelatedItemType } from './wTRelatedItemType';
export declare class WTRelatedItemSearchResult extends null<String, any> {
    'type': WTRelatedItemType;
    'id': any | null;
    'title': any | null;
    'thumbnailURL'?: any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
