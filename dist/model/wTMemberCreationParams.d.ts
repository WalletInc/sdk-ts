export declare class WTMemberCreationParams extends null<String, any> {
    'firstName'?: any | null;
    'lastName'?: any | null;
    'membershipTierID': string;
    'mobileNumber': any | null;
    'email': any | null;
    'birthday': any | null;
    'pointsAccrued': any | null;
    'memberID': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
