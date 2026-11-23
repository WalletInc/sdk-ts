"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsAwardParams = void 0;
class WTPointsAwardParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsAwardParams.attributeTypeMap);
    }
}
exports.WTPointsAwardParams = WTPointsAwardParams;
WTPointsAwardParams.discriminator = undefined;
WTPointsAwardParams.attributeTypeMap = [
    {
        "name": "checkAmountCents",
        "baseName": "checkAmountCents",
        "type": "any"
    },
    {
        "name": "idempotencyKey",
        "baseName": "idempotencyKey",
        "type": "any"
    }
];
//# sourceMappingURL=wTPointsAwardParams.js.map