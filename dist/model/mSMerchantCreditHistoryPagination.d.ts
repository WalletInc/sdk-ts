import { MSMerchantCreditHistory } from './mSMerchantCreditHistory';
export declare class MSMerchantCreditHistoryPagination {
    'results': Array<MSMerchantCreditHistory>;
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
