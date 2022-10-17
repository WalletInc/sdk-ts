export declare class SubscriptionFeature {
    'sortNum': number;
    'name': string;
    'maxVolume'?: string;
    'measurement': string;
    'description': string;
    'currentVolume'?: string;
    'isExceeded'?: boolean;
    'isInUse'?: boolean;
    'isEnabled'?: boolean;
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
