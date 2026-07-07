"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPrizePromotion = void 0;
class WTPrizePromotion extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPrizePromotion.attributeTypeMap);
    }
}
exports.WTPrizePromotion = WTPrizePromotion;
WTPrizePromotion.discriminator = undefined;
WTPrizePromotion.attributeTypeMap = [
    {
        "name": "gameType",
        "baseName": "gameType",
        "type": "WTPrizeGameType"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "any"
    },
    {
        "name": "winOdds",
        "baseName": "winOdds",
        "type": "any"
    },
    {
        "name": "prizeTiers",
        "baseName": "prizeTiers",
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
        "name": "triggerType",
        "baseName": "triggerType",
        "type": "WTPrizeGameTrigger"
    },
    {
        "name": "minimumAge",
        "baseName": "minimumAge",
        "type": "any"
    },
    {
        "name": "registrationAttested",
        "baseName": "registrationAttested",
        "type": "any"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "any"
    },
    {
        "name": "merchantID",
        "baseName": "merchantID",
        "type": "any"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "any"
    },
    {
        "name": "totalPrizePoolValue",
        "baseName": "totalPrizePoolValue",
        "type": "any"
    },
    {
        "name": "oddsDisclosure",
        "baseName": "oddsDisclosure",
        "type": "any"
    }
];
//# sourceMappingURL=wTPrizePromotion.js.map