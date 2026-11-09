export declare class WTSmsCreditSummary extends null<String, any> {
    'merchantID': string;
    'isOnLedger': any | null;
    'creditsGranted': any | null;
    'creditOverdraft': number;
    'ledgerEpoch'?: any | null;
    'grants': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
