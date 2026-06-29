import { StaticVoucherId } from './staticVoucherId';
export declare class WTStaticVoucherCreateParams extends null<String, any> {
    'offerAmountCents': any | null;
    'memberID'?: any | null;
    'cellPhone': any | null;
    'campaignID': StaticVoucherId;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
