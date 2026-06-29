import { MSMemberRedemptionRegisterID } from './mSMemberRedemptionRegisterID';
import { StaticVoucherId } from './staticVoucherId';
import { VSDynamicVoucherStatus } from './vSDynamicVoucherStatus';
import { WTDynamicVoucherRedemptionTransactionType } from './wTDynamicVoucherRedemptionTransactionType';
export declare class WTDynamicVoucherRedemption extends null<String, any> {
    'sessionKey': any | null;
    'redeemedAmount': any | null;
    'dynamicVoucherID': string;
    'redeemedSource': any | null;
    'redeemedTransactionID': any | null;
    'transactionType': WTDynamicVoucherRedemptionTransactionType;
    'registerID': MSMemberRedemptionRegisterID;
    'id': StaticVoucherId;
    'merchantID': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'isActive': any | null;
    'redeemedAt'?: any | null;
    'refundedAt'?: any | null;
    'refundedTransactionID': any | null;
    'refundedAmount': any | null;
    'status': VSDynamicVoucherStatus;
    'redeemedAmountDecimal': any | null;
    'redeemedAmountString': any | null;
    'discountReceived': any | null;
    'metaValue': any | null;
    'parentObjectID': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
