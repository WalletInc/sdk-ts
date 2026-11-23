"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPointsTierReverted = void 0;
class WTPointsTierReverted extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPointsTierReverted.attributeTypeMap);
    }
}
exports.WTPointsTierReverted = WTPointsTierReverted;
WTPointsTierReverted.discriminator = undefined;
WTPointsTierReverted.attributeTypeMap = [
    {
        "name": "fromTierID",
        "baseName": "fromTierID",
        "type": "string"
    },
    {
        "name": "toTierID",
        "baseName": "toTierID",
        "type": "string"
    }
];
//# sourceMappingURL=wTPointsTierReverted.js.map