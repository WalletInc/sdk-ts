export declare class Merchant {
    'companyName': string;
    'address1': string;
    'address2': string;
    'city': string;
    'state': string;
    'country': string;
    'phoneNumber': string;
    'zip': string;
    'currencyAbbreviation': string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'industry': string;
    'industryName': string;
    'infoGenesisPropertyID': string;
    'isFrozen': boolean;
    'billingContactEmployeeID': string;
    'stripeCustomerID': string;
    'isPaymentMethodProvided': boolean;
    'planNickname': string;
    'maxSMSCount': number;
    'isSmsAgreement'?: boolean;
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
