export declare class WTTierThresholdUndoResult extends null<String, any> {
    'movedAtSave': number;
    'movedByPurchasesSince': number;
    'movedAgainSinceLeftAlone': number;
    'discountUses': any | null;
    'reverted': number;
    'thresholdRestoredTo': any | null;
    'newVersionID': any | null;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
