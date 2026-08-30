"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPrizeGamePlayResult = void 0;
class WTPrizeGamePlayResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPrizeGamePlayResult.attributeTypeMap);
    }
}
exports.WTPrizeGamePlayResult = WTPrizeGamePlayResult;
WTPrizeGamePlayResult.discriminator = undefined;
WTPrizeGamePlayResult.attributeTypeMap = [
    {
        "name": "outcome",
        "baseName": "outcome",
        "type": "WTPrizeGamePlayResultOutcome"
    },
    {
        "name": "playsRemaining",
        "baseName": "playsRemaining",
        "type": "any"
    },
    {
        "name": "oddsDisclosure",
        "baseName": "oddsDisclosure",
        "type": "any"
    },
    {
        "name": "prize",
        "baseName": "prize",
        "type": "WTPrizeGamePlayResultPrize"
    }
];
//# sourceMappingURL=wTPrizeGamePlayResult.js.map