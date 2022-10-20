export declare class PickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount {
    'optInListID': string;
    'optInSourceID': string | null;
    'isSubscribed': boolean;
    'isPendingAge21Verification': boolean;
    'mobilePhoneNumber': string;
    'referringURL': string;
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
