"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTTicketUpdateParams = void 0;
class WTTicketUpdateParams extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTTicketUpdateParams.attributeTypeMap);
    }
}
exports.WTTicketUpdateParams = WTTicketUpdateParams;
WTTicketUpdateParams.discriminator = undefined;
WTTicketUpdateParams.attributeTypeMap = [
    {
        "name": "recipientPhoneNumber",
        "baseName": "recipientPhoneNumber",
        "type": "any"
    },
    {
        "name": "recipientEmailAddress",
        "baseName": "recipientEmailAddress",
        "type": "any"
    },
    {
        "name": "recipientMemberID",
        "baseName": "recipientMemberID",
        "type": "any"
    },
    {
        "name": "isComp",
        "baseName": "isComp",
        "type": "any"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "any"
    }
];
//# sourceMappingURL=wTTicketUpdateParams.js.map