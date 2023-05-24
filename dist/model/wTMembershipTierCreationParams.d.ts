export declare class WTMembershipTierCreationParams {
    'tierNumber': string;
    'tierName': string;
    'tierDiscount': number;
    'tierDesignID': string;
    'pointsDesignID': string;
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
