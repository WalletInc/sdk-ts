import { ImportedListRecipient } from './importedListRecipient';
export declare class FetchImportedListRecipientsByPage200Response {
    'total': number;
    'length': number;
    'results': Array<ImportedListRecipient>;
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
