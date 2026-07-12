export declare class WTConnectRequirements extends null<String, any> {
    'currentlyDue': any | null;
    'pastDue': any | null;
    'eventuallyDue': any | null;
    'pendingVerification': any | null;
    'disabledReason'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
