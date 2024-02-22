import { PaginationRequestWithSortOptionsSortOrder } from './paginationRequestWithSortOptionsSortOrder';
export declare class PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey {
    'isArchiveIncluded'?: boolean;
    'pageSize'?: number;
    'pageNum'?: number;
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
