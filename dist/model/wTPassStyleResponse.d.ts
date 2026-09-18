import { WTPassBrandKit } from './wTPassBrandKit';
import { WTPassStyleResponseApple } from './wTPassStyleResponseApple';
import { WTPassStyleResponseGoogle } from './wTPassStyleResponseGoogle';
import { WTPassStyleResponseProviders } from './wTPassStyleResponseProviders';
export declare class WTPassStyleResponse extends null<String, any> {
    'brand': WTPassBrandKit;
    'effective': WTPassBrandKit;
    'providers': WTPassStyleResponseProviders;
    'google'?: WTPassStyleResponseGoogle;
    'apple'?: WTPassStyleResponseApple;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
