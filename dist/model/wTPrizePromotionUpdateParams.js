"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPrizePromotionUpdateParams = void 0;
class WTPrizePromotionUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPrizePromotionUpdateParams.attributeTypeMap);
    }
}
exports.WTPrizePromotionUpdateParams = WTPrizePromotionUpdateParams;
WTPrizePromotionUpdateParams.discriminator = undefined;
WTPrizePromotionUpdateParams.attributeTypeMap = [
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "any"
    }
];
//# sourceMappingURL=wTPrizePromotionUpdateParams.js.map