export declare class WTInfoGenesisLookupRequestErrors {
    'startDateTime': Date;
    'endDateTime': Date;
    'selectedRegisters'?: Array<string>;
    'routingIDs'?: Array<string>;
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
