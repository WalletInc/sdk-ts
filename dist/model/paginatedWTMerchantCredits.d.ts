import { WTMerchantCredit } from './wTMerchantCredit';
export declare class PaginatedWTMerchantCredits {
    'results': Array<WTMerchantCredit>;
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
