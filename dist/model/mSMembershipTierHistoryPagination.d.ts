import { MSMembershipTierHistory } from './mSMembershipTierHistory';
export declare class MSMembershipTierHistoryPagination {
    'results': Array<MSMembershipTierHistory>;
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
