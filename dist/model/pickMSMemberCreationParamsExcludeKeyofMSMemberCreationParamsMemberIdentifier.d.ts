export declare class PickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier {
    'mobileNumber': string;
    'firstName'?: string;
    'lastName'?: string;
    'membershipTierID': string;
    'email': string;
    'birthday': string;
    'pointsAccrued': number;
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
