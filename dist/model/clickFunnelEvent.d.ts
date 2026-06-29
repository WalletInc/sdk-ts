import { ClickFunnelPurchase } from './clickFunnelPurchase';
export declare class ClickFunnelEvent extends null<String, any> {
    'purchase': ClickFunnelPurchase;
    'event': string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
