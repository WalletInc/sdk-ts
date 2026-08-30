"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPrizePromotionCreateParams = void 0;
class WTPrizePromotionCreateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPrizePromotionCreateParams.attributeTypeMap);
    }
}
exports.WTPrizePromotionCreateParams = WTPrizePromotionCreateParams;
WTPrizePromotionCreateParams.discriminator = undefined;
WTPrizePromotionCreateParams.attributeTypeMap = [
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
        "type": "number"
    },
    {
        "name": "playLimitPeriod",
        "baseName": "playLimitPeriod",
        "type": "WTPrizeGamePlayLimitPeriod"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "Date"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "Date"
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
        "type": "boolean"
    }
];
//# sourceMappingURL=wTPrizePromotionCreateParams.js.map