"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsAwardUndoResult = void 0;
class WTPointsAwardUndoResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsAwardUndoResult.attributeTypeMap);
    }
}
exports.WTPointsAwardUndoResult = WTPointsAwardUndoResult;
WTPointsAwardUndoResult.discriminator = undefined;
WTPointsAwardUndoResult.attributeTypeMap = [
    {
        "name": "pointsReversed",
        "baseName": "pointsReversed",
        "type": "number"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "number"
    },
    {
        "name": "tierReverted",
        "baseName": "tierReverted",
        "type": "WTPointsAwardUndoResultTierReverted"
    },
    {
        "name": "replayed",
        "baseName": "replayed",
        "type": "boolean"
    }
];
//# sourceMappingURL=wTPointsAwardUndoResult.js.map