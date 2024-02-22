export declare class WTSMSImportOptInListSubscribers {
    'fileName': string;
    'bucket': string;
    'optInSourceID': string;
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
