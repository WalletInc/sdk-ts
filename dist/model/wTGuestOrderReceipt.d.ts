import { WTGuestAmountBreakdown } from './wTGuestAmountBreakdown';
import { WTOrder } from './wTOrder';
export declare class WTGuestOrderReceipt extends null<String, any> {
    'order': WTOrder;
    'amountBreakdown': WTGuestAmountBreakdown;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
