export declare class PaginationRequestWithIDAndWithoutSortOptions {
    'pageSize'?: number;
    'pageNum'?: number;
    'id': string;
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
