"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPrizeGameActivePromotion = void 0;
class WTPrizeGameActivePromotion extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPrizeGameActivePromotion.attributeTypeMap);
    }
}
exports.WTPrizeGameActivePromotion = WTPrizeGameActivePromotion;
WTPrizeGameActivePromotion.discriminator = undefined;
WTPrizeGameActivePromotion.attributeTypeMap = [
    {
        "name": "active",
        "baseName": "active",
        "type": "any"
    },
    {
        "name": "promotionID",
        "baseName": "promotionID",
        "type": "any"
    },
    {
        "name": "gameType",
        "baseName": "gameType",
        "type": "WTPrizeGameType"
    },
    {
        "name": "sponsorName",
        "baseName": "sponsorName",
        "type": "any"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "oddsDisclosure",
        "baseName": "oddsDisclosure",
        "type": "any"
    },
    {
        "name": "minimumAge",
        "baseName": "minimumAge",
        "type": "any"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "any"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "any"
    },
    {
        "name": "perGuestPlayLimit",
        "baseName": "perGuestPlayLimit",
        "type": "any"
    },
    {
        "name": "playLimitPeriod",
        "baseName": "playLimitPeriod",
        "type": "WTPrizeGamePlayLimitPeriod"
    },
    {
        "name": "prizes",
        "baseName": "prizes",
        "type": "any"
    },
    {
        "name": "noPurchaseNecessary",
        "baseName": "noPurchaseNecessary",
        "type": "any"
    }
];
//# sourceMappingURL=wTPrizeGameActivePromotion.js.map