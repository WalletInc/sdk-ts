export declare class WTMemberCreationParams {
    'firstName'?: string;
    'lastName'?: string;
    'membershipTierID': string;
    'mobileNumber': string;
    'pointsAccrued': number;
    'memberID': string;
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
