import { WTRelatedItemType } from './wTRelatedItemType';
export declare class WTRelatedItemRef extends null<String, any> {
    'type': WTRelatedItemType;
    'id': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
