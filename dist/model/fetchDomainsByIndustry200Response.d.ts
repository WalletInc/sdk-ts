export declare class FetchDomainsByIndustry200Response {
    'entertainment': Array<any>;
    'grocery': any | null;
    'service': any | null;
    'casino': any | null;
    'hospitality': any | null;
    'food': any | null;
    'retail': any | null;
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
