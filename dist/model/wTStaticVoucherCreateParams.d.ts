import { WTWalletPageViewId } from './wTWalletPageViewId';
export declare class WTStaticVoucherCreateParams {
    'offerAmountCents': number;
    'memberID'?: string;
    'cellPhone': string;
    'campaignID': WTWalletPageViewId;
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
