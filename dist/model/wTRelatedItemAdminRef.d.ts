import { WTRelatedItemStatus } from './wTRelatedItemStatus';
import { WTRelatedItemType } from './wTRelatedItemType';
export declare class WTRelatedItemAdminRef extends null<String, any> {
    'type': WTRelatedItemType;
    'id': any | null;
    'status': WTRelatedItemStatus;
    'title'?: any | null;
    'thumbnailURL'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
