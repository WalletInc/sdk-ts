import { WTImportedListRecipientFromMembershipTierImportTierID } from './wTImportedListRecipientFromMembershipTierImportTierID';
export declare class WTImportedListRecipientFromMembershipTierImport {
    'listName': string;
    'phoneNumberID': string;
    'tierID': WTImportedListRecipientFromMembershipTierImportTierID;
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
