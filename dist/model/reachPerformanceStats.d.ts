export declare class ReachPerformanceStats extends null<String, any> {
    'sentCount': any | null;
    'deliveredCount': any | null;
    'failedCount': any | null;
    'undeliveredCount': any | null;
    'viewedCount': any | null;
    'redemptionsCount': any | null;
    'valueClaimed': any | null;
    'revenueGenerated': any | null;
    'refundsCount': any | null;
    'valueRefunded': any | null;
    'revenueLost': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
