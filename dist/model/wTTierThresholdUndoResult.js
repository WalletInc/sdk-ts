"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTierThresholdUndoResult = void 0;
class WTTierThresholdUndoResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTierThresholdUndoResult.attributeTypeMap);
    }
}
exports.WTTierThresholdUndoResult = WTTierThresholdUndoResult;
WTTierThresholdUndoResult.discriminator = undefined;
WTTierThresholdUndoResult.attributeTypeMap = [
    {
        "name": "movedAtSave",
        "baseName": "movedAtSave",
        "type": "number"
    },
    {
        "name": "movedByPurchasesSince",
        "baseName": "movedByPurchasesSince",
        "type": "number"
    },
    {
        "name": "movedAgainSinceLeftAlone",
        "baseName": "movedAgainSinceLeftAlone",
        "type": "number"
    },
    {
        "name": "discountUses",
        "baseName": "discountUses",
        "type": "any"
    },
    {
        "name": "reverted",
        "baseName": "reverted",
        "type": "number"
    },
    {
        "name": "thresholdRestoredTo",
        "baseName": "thresholdRestoredTo",
        "type": "any"
    },
    {
        "name": "newVersionID",
        "baseName": "newVersionID",
        "type": "any"
    }
];
//# sourceMappingURL=wTTierThresholdUndoResult.js.map