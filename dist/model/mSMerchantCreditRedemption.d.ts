import { MSMemberRedemptionRegisterID } from './mSMemberRedemptionRegisterID';
import { MSMemberRedemptionTransactionType } from './mSMemberRedemptionTransactionType';
export declare class MSMerchantCreditRedemption extends null<String, any> {
    'transactionID': any | null;
    'transactionType': MSMemberRedemptionTransactionType;
    'amount': any | null;
    'registerID'?: MSMemberRedemptionRegisterID;
    'terminalType': any | null;
    'id': any | null;
    'merchantCreditID': string;
    'merchantID': string;
    'createdAt': any | null;
    'isActive': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
