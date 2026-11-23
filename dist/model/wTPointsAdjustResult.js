"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsAdjustResult = void 0;
class WTPointsAdjustResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsAdjustResult.attributeTypeMap);
    }
}
exports.WTPointsAdjustResult = WTPointsAdjustResult;
WTPointsAdjustResult.discriminator = undefined;
WTPointsAdjustResult.attributeTypeMap = [
    {
        "name": "entryID",
        "baseName": "entryID",
        "type": "string"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "number"
    },
    {
        "name": "replayed",
        "baseName": "replayed",
        "type": "boolean"
    }
];
//# sourceMappingURL=wTPointsAdjustResult.js.map