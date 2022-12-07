import { WTMember } from './wTMember';
export declare class PaginatedWTMembers {
    'results': Array<WTMember>;
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
