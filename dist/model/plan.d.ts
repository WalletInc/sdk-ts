export declare class Plan extends null<String, any> {
    'name': string;
    'price': string;
    'features': any | null;
    'measurement'?: string;
    'isExceeded'?: boolean;
    'isCurrent'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
