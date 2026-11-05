export declare class WTMenuOption extends null<String, any> {
    'id'?: any | null;
    'title': any | null;
    'priceDeltaCents': any | null;
    'isSoldOut'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
