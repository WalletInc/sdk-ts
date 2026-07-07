export declare class WTPrizeGamePlayResultPrize {
    'title'?: any | null;
    'scanID': any | null;
    'advertisementCreditID': any | null;
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
