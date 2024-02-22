export declare class FetchDomainsByIndustry200Response {
    'entertainment': Array<any>;
    'grocery': Array<any>;
    'service': Array<any>;
    'casino': Array<any>;
    'hospitality': Array<any>;
    'food': Array<any>;
    'retail': Array<any>;
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
