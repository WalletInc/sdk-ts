import { MSMembershipTierRedemption } from './mSMembershipTierRedemption';
export declare class MSMembershipTierRedemptionPagination {
    'results': Array<MSMembershipTierRedemption>;
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
