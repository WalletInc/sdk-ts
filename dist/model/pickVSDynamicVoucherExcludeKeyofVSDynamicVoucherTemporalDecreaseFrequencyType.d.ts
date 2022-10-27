export declare class PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType {
    'startDate': Date;
    'expirationDate': Date;
    'id': string;
    'title': string;
    'notes': string;
    'merchantsReferenceID'?: string;
    'validOnlyAtPOSRegisterIDs'?: Array<string>;
    'paymentDesignID': string;
    'employeeID': string;
    'isActive': boolean;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'startingValue': number;
    'maxBudget': number;
    'temporalDecreaseAmount': number;
    'temporalDecreaseFrequency': number;
    'numericalDecreaseAmount'?: number;
    'numericalDecreaseFrequency'?: number;
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
