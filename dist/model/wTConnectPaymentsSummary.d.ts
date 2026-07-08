import { WTConnectPaymentsSummaryBalance } from './wTConnectPaymentsSummaryBalance';
export declare class WTConnectPaymentsSummary extends null<String, any> {
    'balance': WTConnectPaymentsSummaryBalance;
    'recentPayouts': any | null;
    'recentCharges': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
