import { StaticVoucherCampaignValueType } from './staticVoucherCampaignValueType';
import { StaticVoucherId } from './staticVoucherId';
export declare class StaticVoucherCampaign extends null<String, any> {
    'id': StaticVoucherId;
    'title': any | null;
    'notes': any | null;
    'valueType': StaticVoucherCampaignValueType;
    'isLoaded': any | null;
    'displayValue'?: any | null;
    'merchantsReferenceID'?: any | null;
    'validOnlyAtPOSRegisterIDs'?: any | null;
    'paymentDesignID': string;
    'employeeID': string;
    'reinvestmentSum': any | null;
    'numberOfVouchersInFile': any | null;
    'campaignGroupID'?: string;
    'bucket'?: any | null;
    'createdBySourceID': any | null;
    'originalFileName'?: any | null;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'voucherType': any | null;
    'reinvestmentSumDecimal': any | null;
    'reinvestmentSumString': any | null;
    'startDate': any | null;
    'expirationDate': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
