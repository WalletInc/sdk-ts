import { StaticVoucherCampaignValueType } from './staticVoucherCampaignValueType';
export declare class UpdateStaticVoucherCampaignWithVoucher extends null<String, any> {
    'title': any | null;
    'notes': any | null;
    'valueType': StaticVoucherCampaignValueType;
    'displayValue'?: any | null;
    'merchantsReferenceID'?: any | null;
    'validOnlyAtPOSRegisterIDs'?: any | null;
    'paymentDesignID': string;
    'startDateTime': any | null;
    'expirationDateTime': any | null;
    'memberID'?: any | null;
    'offerAmountCents': any | null;
    'cellPhone'?: any | null;
    'voucherID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
