export declare class MSMembershipTierHistory extends null<String, any> {
    'tierNumber': any | null;
    'tierName': any | null;
    'tierDiscount': any | null;
    'tierDesignID': string;
    'pointsDesignID': string;
    'id': any | null;
    'merchantID': string;
    'tierID': any | null;
    'createdAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
