import { ClickFunnelPurchase } from './clickFunnelPurchase';
export declare class ClickFunnelEvent {
    'purchase': ClickFunnelPurchase;
    'event': string;
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
