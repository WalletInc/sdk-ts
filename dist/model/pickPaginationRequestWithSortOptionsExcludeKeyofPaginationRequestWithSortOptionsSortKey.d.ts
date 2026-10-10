import { PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder } from './pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder';
export declare class PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey {
    'isArchiveIncluded'?: boolean;
    'pageSize'?: number;
    'pageNum'?: number;
    'sortOrder'?: PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder;
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
