import { FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType } from './fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType';
import { PaymentDesign } from './paymentDesign';
export declare class FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner {
    'paymentDesign': PaymentDesign;
    'valueType': FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType;
    'voucherType': number;
    'expirationDate': Date;
    'startDate': Date;
    'title': string;
    'isRedeemed': boolean;
    'displayValue': string;
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
