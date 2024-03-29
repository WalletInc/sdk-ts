import { PaginationRequestWithSortOptionsSortOrder } from './paginationRequestWithSortOptionsSortOrder';
export declare class PaginationRequestWithSortOptions {
    'isArchiveIncluded'?: boolean;
    'pageSize'?: number;
    'pageNum'?: number;
    'sortKey'?: PaginationRequestWithSortOptions.SortKeyEnum;
    'sortOrder'?: PaginationRequestWithSortOptionsSortOrder;
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
export declare namespace PaginationRequestWithSortOptions {
    enum SortKeyEnum {
        CreatedAt
    }
}
