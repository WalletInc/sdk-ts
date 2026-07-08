export declare class WTLeadFiConsumerProfileIncome {
    'household'?: any | null;
    'personal'?: any | null;
    'estimate'?: any | null;
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
