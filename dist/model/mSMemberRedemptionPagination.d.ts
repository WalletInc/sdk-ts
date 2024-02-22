import { MSMemberRedemption } from './mSMemberRedemption';
export declare class MSMemberRedemptionPagination {
    'results': Array<MSMemberRedemption>;
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
