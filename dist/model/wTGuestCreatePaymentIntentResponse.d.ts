import { WTGuestAmountBreakdown } from './wTGuestAmountBreakdown';
export declare class WTGuestCreatePaymentIntentResponse extends null<String, any> {
    'orderID': any | null;
    'reservationID': any | null;
    'chargeModel': WTGuestCreatePaymentIntentResponse.ChargeModelEnum;
    'currency': any | null;
    'clientSecret': any | null;
    'paymentIntentID': any | null;
    'connectedAccountId': any | null;
    'publishableKey': any | null;
    'amountBreakdown': WTGuestAmountBreakdown;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare namespace WTGuestCreatePaymentIntentResponse {
    enum ChargeModelEnum {
        Direct
    }
}
