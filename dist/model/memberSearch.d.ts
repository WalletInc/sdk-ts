import { MemberSearchSearchKey } from './memberSearchSearchKey';
import { MemberSearchSortKey } from './memberSearchSortKey';
import { PaginationRequestWithSortOptionsSortOrder } from './paginationRequestWithSortOptionsSortOrder';
export declare class MemberSearch {
    'isArchiveIncluded'?: boolean;
    'pageSize'?: number;
    'pageNum'?: number;
    'sortOrder'?: PaginationRequestWithSortOptionsSortOrder;
    'sortKey'?: MemberSearchSortKey;
    'searchKey': MemberSearchSearchKey;
    'searchValue': string;
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
