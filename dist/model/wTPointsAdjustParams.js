"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsAdjustParams = void 0;
class WTPointsAdjustParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsAdjustParams.attributeTypeMap);
    }
}
exports.WTPointsAdjustParams = WTPointsAdjustParams;
WTPointsAdjustParams.discriminator = undefined;
WTPointsAdjustParams.attributeTypeMap = [
    {
        "name": "delta",
        "baseName": "delta",
        "type": "any"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "any"
    },
    {
        "name": "idempotencyKey",
        "baseName": "idempotencyKey",
        "type": "any"
    }
];
//# sourceMappingURL=wTPointsAdjustParams.js.map