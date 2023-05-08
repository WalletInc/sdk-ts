export declare class MSMemberRedemption {
    'transactionID': string;
    'transactionType': string | null;
    'points': number;
    'registerID'?: string | number | null;
    'terminalType': string;
    'id': string;
    'memberID': string;
    'merchantID': string;
    'createdAt': Date;
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
