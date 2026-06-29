import { PaginationRequestWithSortOptionsSortOrder } from './paginationRequestWithSortOptionsSortOrder';
export declare class PaginationRequestWithSortOptions extends null<String, any> {
    'isArchiveIncluded'?: any | null;
    'pageSize'?: any | null;
    'pageNum'?: any | null;
    'sortKey'?: PaginationRequestWithSortOptions.SortKeyEnum;
    'sortOrder'?: PaginationRequestWithSortOptionsSortOrder;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare namespace PaginationRequestWithSortOptions {
    enum SortKeyEnum {
        CreatedAt
    }
}
