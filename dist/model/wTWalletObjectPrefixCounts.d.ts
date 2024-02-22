import { WTWalletPageViewCount } from './wTWalletPageViewCount';
export declare class WTWalletObjectPrefixCounts {
    'walletObjectPrefix': string;
    'walletObjectName': string;
    'list': Array<WTWalletPageViewCount>;
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
