import { WTPassStyleResponseProvidersApple } from './wTPassStyleResponseProvidersApple';
export declare class WTPassStyleResponseProviders {
    'apple': WTPassStyleResponseProvidersApple;
    'google': WTPassStyleResponseProvidersApple;
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
