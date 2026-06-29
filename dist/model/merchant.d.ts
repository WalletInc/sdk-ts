export declare class Merchant extends null<String, any> {
    'companyName': any | null;
    'address1': any | null;
    'address2': any | null;
    'city': any | null;
    'state': any | null;
    'country': any | null;
    'phoneNumber': any | null;
    'zip': any | null;
    'currencyAbbreviation'?: any | null;
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'industry': any | null;
    'industryName': any | null;
    'infoGenesisPropertyID': any | null;
    'isFrozen': any | null;
    'billingContactEmployeeID': any | null;
    'marketingContactEmployeeID': any | null;
    'technicalContactEmployeeID': any | null;
    'customerServiceContactEmployeeID': any | null;
    'stripeCustomerID': any | null;
    'isPaymentMethodProvided': any | null;
    'planNickname': any | null;
    'maxSMSCount': any | null;
    'isSmsAgreement'?: any | null;
    'isWhiteLabeled'?: any | null;
    'isFeatured'?: any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
