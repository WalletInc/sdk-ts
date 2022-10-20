import { PaymentDesign } from './paymentDesign';
export declare class InlineResponse2009 {
    'paymentDesign': PaymentDesign;
    'valueType': string | null;
    'voucherType': number;
    'expirationDate': Date;
    'startDate': Date;
    'title': string;
    'isRedeemed': boolean;
    'offerAmountCentsDecimal': string;
    'offerAmountCents': number;
    'memberID': string;
    'cellPhoneNumber': string;
    'id': string;
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
