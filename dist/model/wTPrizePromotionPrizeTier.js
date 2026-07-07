"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPrizePromotionPrizeTier = void 0;
class WTPrizePromotionPrizeTier extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPrizePromotionPrizeTier.attributeTypeMap);
    }
}
exports.WTPrizePromotionPrizeTier = WTPrizePromotionPrizeTier;
WTPrizePromotionPrizeTier.discriminator = undefined;
WTPrizePromotionPrizeTier.attributeTypeMap = [
    {
        "name": "advertisementCreditID",
        "baseName": "advertisementCreditID",
        "type": "any"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "any"
    },
    {
        "name": "awardedCount",
        "baseName": "awardedCount",
        "type": "any"
    }
];
//# sourceMappingURL=wTPrizePromotionPrizeTier.js.map