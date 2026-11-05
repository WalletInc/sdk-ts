export declare class WTMenuOptionGroup extends null<String, any> {
    'id': any | null;
    'createdAt': any | null;
    'updatedAt': any | null;
    'merchantID': string;
    'title': any | null;
    'minChoices': any | null;
    'maxChoices': any | null;
    'options': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
