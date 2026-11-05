export declare class WTCartLineInput extends null<String, any> {
    'itemID': any | null;
    'quantity': any | null;
    'note'?: any | null;
    'optionIDs'?: any | null;
    'menuID'?: any | null;
    'expectedUnitAmountCents'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
