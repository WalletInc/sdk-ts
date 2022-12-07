export declare class PickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier {
    'firstName'?: string;
    'lastName'?: string;
    'membershipTierID': string;
    'mobileNumber': string;
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
