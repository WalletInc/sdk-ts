import { WTTierThresholdDirection } from './wTTierThresholdDirection';
export declare class WTTierThresholdPreview extends null<String, any> {
    'direction': WTTierThresholdDirection;
    'wouldUpgrade': any | null;
    'totalMembers': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
