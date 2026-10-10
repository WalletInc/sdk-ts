import { WTImportedListRecipientFromMembershipTierImportTierID } from './wTImportedListRecipientFromMembershipTierImportTierID';
export declare class WTImportedListRecipientFromMembershipTierImport extends null<String, any> {
    'listName': any | null;
    'phoneNumberID': string;
    'tierID': WTImportedListRecipientFromMembershipTierImportTierID;
    'isOver21Required'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
