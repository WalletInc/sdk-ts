export declare class WTPosMachineCreateParams {
    'registerID': string;
    'registerName': string;
    'outletName': string;
    'outletNumber': number;
    'profitCenter': string;
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
