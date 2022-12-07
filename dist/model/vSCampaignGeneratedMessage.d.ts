export declare class VSCampaignGeneratedMessage {
    'staticVoucherID': string;
    'message': string;
    'cellPhoneNumber': string;
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
