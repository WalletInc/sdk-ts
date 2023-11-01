export declare class WTSMSImportedListCreate {
    'phoneNumberID': string;
    'isActive': boolean;
    'listName': string;
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
