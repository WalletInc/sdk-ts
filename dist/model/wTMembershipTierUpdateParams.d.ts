export declare class WTMembershipTierUpdateParams extends null<String, any> {
    'tierNumber': any | null;
    'tierName': any | null;
    'tierDiscount': any | null;
    'tierDesignID': string;
    'pointsDesignID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
