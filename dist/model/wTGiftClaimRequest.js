"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTGiftClaimRequest = void 0;
class WTGiftClaimRequest extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTGiftClaimRequest.attributeTypeMap);
    }
}
exports.WTGiftClaimRequest = WTGiftClaimRequest;
WTGiftClaimRequest.discriminator = undefined;
WTGiftClaimRequest.attributeTypeMap = [
    {
        "name": "claimedByPhoneNumber",
        "baseName": "claimedByPhoneNumber",
        "type": "any"
    },
    {
        "name": "claimedByMemberID",
        "baseName": "claimedByMemberID",
        "type": "any"
    }
];
//# sourceMappingURL=wTGiftClaimRequest.js.map