import { MSMemberHistory } from './mSMemberHistory';
export declare class MSMemberHistoryPagination {
    'results': Array<MSMemberHistory>;
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
