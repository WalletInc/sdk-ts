"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTPrizeGamePlayRequest = void 0;
class WTPrizeGamePlayRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTPrizeGamePlayRequest.attributeTypeMap);
    }
}
exports.WTPrizeGamePlayRequest = WTPrizeGamePlayRequest;
WTPrizeGamePlayRequest.discriminator = undefined;
WTPrizeGamePlayRequest.attributeTypeMap = [
    {
        "name": "promotionID",
        "baseName": "promotionID",
        "type": "any"
    },
    {
        "name": "phoneVerificationToken",
        "baseName": "phoneVerificationToken",
        "type": "any"
    }
];
//# sourceMappingURL=wTPrizeGamePlayRequest.js.map