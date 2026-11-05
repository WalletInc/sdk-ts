export declare class WTOrderingSettingsUpdateParams extends null<String, any> {
    'taxRatePercent'?: any | null;
    'alcoholTaxRatePercent'?: any | null;
    'defaultPrepMinutes'?: any | null;
    'busyExtraMinutes'?: any | null;
    'isPaused'?: boolean;
    'pausedReason'?: any | null;
    'autoAccept'?: boolean;
    'scheduledPickup'?: boolean;
    'timeZone'?: any | null;
    'hours'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
