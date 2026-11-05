import { WTPlanTier } from './wTPlanTier';
export declare class WTWalletSectionAccess extends null<String, any> {
    'section': any | null;
    'included': boolean;
    'lowestTier'?: WTPlanTier;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
