export declare class CSPViolationSummaryRow extends null<String, any> {
    'violatedDirective': string;
    'blockedHost': any | null;
    'disposition': any | null;
    'count': any | null;
    'sampleDocumentURI': string;
    'firstSeen'?: Date;
    'lastSeen'?: Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
