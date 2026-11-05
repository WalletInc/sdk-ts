export declare class WTOrderingSettings extends null<String, any> {
    'merchantID': string;
    'taxRatePercent': any | null;
    'alcoholTaxRatePercent'?: any | null;
    'defaultPrepMinutes': any | null;
    'busyExtraMinutes': any | null;
    'isPaused': any | null;
    'pausedReason'?: any | null;
    'autoAccept': any | null;
    'scheduledPickup': any | null;
    'timeZone': any | null;
    'hours': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
