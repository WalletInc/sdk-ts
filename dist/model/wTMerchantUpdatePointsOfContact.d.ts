export declare class WTMerchantUpdatePointsOfContact extends null<String, any> {
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
    static getAttributeTypeMap(): any;
}
