export declare class AdvertisementCredit {
    'title': string;
    'valueType': string | null;
    'paymentDesignID': string;
    'maxUses': number;
    'discountValue': number;
    'employeeID': string;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'discountValueDecimal': string;
    'discountValueString': string;
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
