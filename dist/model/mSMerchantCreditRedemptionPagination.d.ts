import { MSMerchantCreditRedemption } from './mSMerchantCreditRedemption';
export declare class MSMerchantCreditRedemptionPagination {
    'results': Array<MSMerchantCreditRedemption>;
    'length': number;
    'total': number;
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
