export declare class WTLeadFiConsumerProfileAddress {
    'address'?: any | null;
    'state'?: any | null;
    'city'?: any | null;
    'zip'?: any | null;
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
