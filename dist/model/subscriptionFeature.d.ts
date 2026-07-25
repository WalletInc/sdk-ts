export declare class SubscriptionFeature extends null<String, any> {
    'sortNum': any | null;
    'name': any | null;
    'slug'?: any | null;
    'maxVolume'?: any | null;
    'measurement': any | null;
    'description': any | null;
    'currentVolume'?: any | null;
    'isExceeded'?: any | null;
    'isInUse'?: any | null;
    'isEnabled'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
