export declare class MemberSearch {
    'isArchiveIncluded'?: boolean;
    'pageSize'?: number;
    'pageNum'?: number;
    'sortOrder'?: string | null;
    'sortKey'?: string | null;
    'searchKey': string | null;
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
