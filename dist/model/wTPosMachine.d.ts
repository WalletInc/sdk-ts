export declare class WTPosMachine {
    'registerID': string;
    'registerName': string;
    'outletName': string;
    'outletNumber': number;
    'profitCenter': string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'merchantID': string;
    'isActive': boolean;
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
