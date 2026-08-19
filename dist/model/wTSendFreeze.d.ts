export declare class WTSendFreeze extends null<String, any> {
    'origin': any | null;
    'reason'?: any | null;
    'frozenBy'?: any | null;
    'createdAt'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
