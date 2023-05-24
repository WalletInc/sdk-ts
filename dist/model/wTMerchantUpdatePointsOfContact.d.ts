export declare class WTMerchantUpdatePointsOfContact {
    'billingEmployeeID': string;
    'marketingEmployeeID'?: string;
    'technicalEmployeeID'?: string;
    'customerServiceEmployeeID'?: string;
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
