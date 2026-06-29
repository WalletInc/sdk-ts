import { MemberSearchSearchKey } from './memberSearchSearchKey';
import { MemberSearchSortKey } from './memberSearchSortKey';
import { PaginationRequestWithSortOptionsSortOrder } from './paginationRequestWithSortOptionsSortOrder';
export declare class MemberSearch extends null<String, any> {
    'isArchiveIncluded'?: any | null;
    'pageSize'?: any | null;
    'pageNum'?: any | null;
    'sortOrder'?: PaginationRequestWithSortOptionsSortOrder;
    'sortKey'?: MemberSearchSortKey;
    'searchKey': MemberSearchSearchKey;
    'searchValue': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
