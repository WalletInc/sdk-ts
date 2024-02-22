export declare class ReachPerformanceStats {
    'sentCount': number;
    'deliveredCount': number;
    'failedCount': number;
    'undeliveredCount': number;
    'viewedCount': number;
    'redemptionsCount': number;
    'valueClaimed': number;
    'revenueGenerated': number;
    'refundsCount': number;
    'valueRefunded': number;
    'revenueLost': number;
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
