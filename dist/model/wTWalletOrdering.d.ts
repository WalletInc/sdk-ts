export declare class WTWalletOrdering extends null<String, any> {
    'isOnlineCheckout': any | null;
    'isAcceptingOrders': any | null;
    'pausedReason'?: any | null;
    'opensAt'?: any | null;
    'opensDay'?: any | null;
    'timeZone': any | null;
    'prepMinutes': any | null;
    'scheduledPickup': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
