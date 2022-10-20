export declare class PaymentPrefixes {
    'membershipTier': string;
    'member': string;
    'merchantCredit': string;
    'newsArticle': string;
    'performance': string;
    'advertisementCredit': string;
    'advertisementCreditScan': string;
    'dynamicVoucher': string;
    'staticVoucherCampaign': string;
    'staticVoucher': string;
    'digitalWalletSession': string;
    'walletConfiguration': string;
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
