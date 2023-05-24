export declare class WTImportedListRecipientFromMembershipTierImport {
    'listName': string;
    'phoneNumberID': string;
    'tierID': string | null;
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
